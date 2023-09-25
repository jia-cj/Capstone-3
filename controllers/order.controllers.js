const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utilities/errorhandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//POST - new order => api/v1/order/new 
module.exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
        orderStatus,
        paymentInfo

    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
        orderStatus,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        order
    })

})


//GET - single order => /api/v1/order/:id
module.exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {

    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (!order) {
        return next(new ErrorHandler(`No Order found with this ID ${req.params.id}`, 404))
        //console.log(req.params.id)
    }

    res.status(200).json({
        success: true,
        order
        
    })
})

// Get logged in user orders   =>   /api/v1/orders/myOrders
module.exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({user: req.user.id})

    res.status(200).json({
        success: true,
        orders
    })
})

// Get all orders - ADMIN  =>   /api/v1/admin/orders/
module.exports.allOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

// Update / Process order - ADMIN  =>   /api/v1/admin/order/:id
module.exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
    order.deliveredAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false })
}

// Delete order   =>   /api/v1/admin/order/:id
module.exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findOneAndRemove ({_id: req.params.id});

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await order.deleteOne()

    res.status(200).json({
        success: true
    })
})