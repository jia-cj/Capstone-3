const express = require('express');
const app = express.Router();

const orderController = require('../controllers/order.controllers');
const auth = require('../middlewares/authUser');
const { authUser, authRoles } = auth

app.route('/order/new').post(authUser, authRoles('user'), orderController.newOrder);

app.route('/order/myOrders').get(authUser, orderController.myOrders);

app.route('/order/:id').get(authUser, orderController.getSingleOrder);


//admin access
app.route('/admin/orders').get(authUser, authRoles('admin'), orderController.allOrders);
app.route('/admin/order/:id').put(authUser, authRoles('admin'), orderController.updateOrder);
app.route('/admin/order/:id').delete(authUser,authRoles('admin'), orderController.deleteOrder);




module.exports = app;