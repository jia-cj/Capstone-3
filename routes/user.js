const express = require('express')
const app = express.Router();

const userController = require('../controllers/user.controllers')
const auth = require('../middlewares/authUser');
const { authUser, authRoles } = auth

app.route('/register').post(userController.registration);
app.route('/login').post(userController.loginUser);
app.route('/logout').get(authUser, userController.logoutUser);
app.route('/password/forgot').post(userController.forgotPassword);
app.route('/password/reset/:token').put(userController.resetPassword);
app.route('/my-profile').get(authUser, userController.getUserProfile)
app.route('/password/update').put(authUser, userController.updatePassword);
app.route('/my-profile/update').put(authUser, userController.updateMyProfile);
app.route('/admin/users').get(authUser, authRoles('admin'), userController.allUsers);
app.route('/admin/user/:id').get(authUser, authRoles('admin'), userController.getUserDetails);
app.route('/admin/user/:id').put(authUser, authRoles('admin'), userController.updateUserDetailsByAdmin);
app.route('/admin/user/:id').delete(authUser, authRoles('admin'), userController.deleteUser);






module.exports = app;
