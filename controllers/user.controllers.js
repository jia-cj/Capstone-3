const User = require('../models/user')

const ErrorHandler = require('../utilities/errorhandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utilities/jwtToken')
const sendEmail = require('../utilities/sendEmail')

const crypto = require('crypto');

//POST - register a user => /api/v1/register
module.exports.registration = catchAsyncErrors( async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'scoop_logo',
            url: 'https://previews.123rf.com/images/djati11/djati111808/djati11180801319/106191774-spoon-and-fork-logo-template-vector-icon.jpg'
        }
    })

    // const token = user.getJwtToken();

    // res.status(201).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 200, res)
})

//Login user => /api/v1/login
module.exports.loginUser = catchAsyncErrors( async (req, res, next) => {
    const { email, password } = req.body;

    //checks if email and password is entered by user
    if(!email || !password){
        return next (new ErrorHandler('Please enter email & password', 400))
    }

    //finding user in DB
    const user = await User.findOne({ email }).select('+password')

    if(!user){
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    //checking if password is correct
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password'), 401)
    }

    sendToken(user, 200, res)

})

//forgot password => /api/v1/password/forgot
module.exports.forgotPassword = catchAsyncErrors (async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email});

    if(!user) {
        return next( new ErrorHandler("There's no account with that email", 404 ))
    }

    //get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false})

    // create reset password URL
    const resetURL= `${req.protocol}://${req.get('host')}/api/v1/password/reset-${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetURL}\n\nIf you have not requested this email,
    then you don't have a choice., it was been reset by someone.`;

    try { //the 'options' in sendEmail.js

        await sendEmail({
            email: user.email,
            subject: 'E-Commerce Password Reset!',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetpasswordExpire = undefined;

        await user.save({ validateBeforeSave: false})

        return next(new ErrorHandler(error.message, 500))
        
    }

})

//forgot password => /api/v1/password/reset/:token
module.exports.resetPassword = catchAsyncErrors (async(req, res, next) => {
    //hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetpasswordExpire: { $gt: Date.now() }
    })

    if(!user){
        return next(new ErrorHandler(`Password reset token is invalid or has been expired`, 400));
    }

    if(req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    //new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetpasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)

})

//GET - my-user profile => /api/v1/my-profile
module.exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

//PUT - update or change password => /api/v1/password/update
module.exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    //check previous user-password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if(!isMatched){
        return next(new ErrorHandler('Old password is incorrect'), 400)
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)
})

//PUT - update my-profile => /api/v1/my-profile/update
module.exports.updateMyProfile = catchAsyncErrors (async (req, res, next) => {
    const newUserData = {
        name : req.body.name,
        email : req.body.email
    }

    // update avatar: TODO

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

//logout user => /api/v1/logout
module.exports.logoutUser = catchAsyncErrors ( async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logout User"
    })
})

//Admin Routes

//GET - all users => /api/v1/admin/users
module.exports.allUsers = catchAsyncErrors(async(req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//GET -  user detail => /api/v1/admin/user/:id
module.exports.getUserDetails = catchAsyncErrors(async(req, res, next) => {
    const user = await User.find();

    if(!user){
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user
    })
})

//PUT - admin/user => /api/v1/admin/user/:id
module.exports.updateUserDetailsByAdmin = catchAsyncErrors (async (req, res, next) => {
    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        role: req.body.role
    }

    // update avatar: TODO

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

//DELETE - user => /api/v1/admin/user/:id
module.exports.deleteUser = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findOneAndRemove ({_id: req.params.id});

    if(!user){
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`))
    }

    //deleting avatar in cloudinary - TODO

    res.status(200).json({
        success: true
    })
})