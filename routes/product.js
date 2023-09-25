const express = require('express');
const app = express.Router();

const productController = require('../controllers/product.controllers');
const auth = require('../middlewares/authUser');
const { authUser, authRoles } = auth


app.route('/products').get(productController.getProducts);
app.route('/product/:id').get(productController.getSingleProduct)
app.route('/admin/product/:id').put(authUser, authRoles('admin'), productController.updateSingleProduct)
app.route('/admin/product/:id').delete(authUser, authRoles('admin'), productController.deleteSingleProduct)
app.route('/admin/product/new').post(authUser, authRoles('admin'), productController.newProduct)

module.exports = app;