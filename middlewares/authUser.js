const User = require('../models/user')

const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require('../utilities/errorhandler');
const jwt = require('jsonwebtoken')

//authentication of user 
module.exports.authUser = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies
    
    if(!token){
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);
    next()

})

//user roles
module.exports.authRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403)
            )
        }

        next()
    }
}