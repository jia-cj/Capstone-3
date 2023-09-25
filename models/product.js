const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Please enter product name"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },

    ratings: {
        type: Number,
        default: 0
    },

    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, "Please select category for this product"],
        enum: {
            values: [
            
                'Milk',
                'Poultry',
                'Pantry',
                'Meat',
                'Fruits',
                'Herbs and Spices',
                'Vegetables',
               
                
            ],
            message: "Please select correct category for product"
        }
    },

    stock: {
        type: Number,
        required: [true, 'Please enter product stock']
    },

    price: {
        type: Number,
        required: [true, "Please add a price"]
    },

    isActive : {
        type : Boolean,
        default : true
    },

    numOfReviews:{
        type: Number,
        default: 0
    },

    reviews: [
        {
            name:{
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

    userOrders : [
        {
            userId : {
                type : Object
            },
            orderId : {
                type : String
            }
        }
    ],

    createdOn : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model('Product', productSchema)