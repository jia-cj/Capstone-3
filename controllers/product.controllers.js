const Product = require('../models/product')
const ErrorHandler = require('../utilities/errorhandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

//POST - creating new product => /api/v1/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body)
    res.status(201).json({
        sucess: true,
        product
    })
})

//GET all product => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        sucess: true,
        count: products.length,
        products
    })
})

//GET single product => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors(async(req, res, next) => {

        const product = await Product.findById(req.params.id);

        if (!product) {
          return next(new ErrorHandler('Product not found', 404))
          };

        res.status(200).json({
          success: true,
          product
        });    

})

//PUT - update a product => /api/v1/product/id

exports.updateSingleProduct = catchAsyncErrors(async (req, res, next) => {

        let product = await Product.findById(req.params.id);

        if(!product) {
            return next(new ErrorHandler('Product not found', 404))
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })

})

//DELETE - product => /api/v1/admin/product/:id

exports.deleteSingleProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }

    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
})

