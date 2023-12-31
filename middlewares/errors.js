const ErrorHandler = require('../utilities/errorhandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    
    if(NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if(NODE_ENV === 'PRODUCTION'){
        let error = {...err}

        error.message = err.message

        //wrong mongoose object ID error
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        //handling mongoose validation error
        if(err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHanlder(message, 400)
        }

        //handling mongoose duplicate key errors
        if(err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.KeyValue)} entered`
        }

        //handling wrong JWT error
        if(err.name === 'JsonWebTokenError') {
            const message = 'JSON Web Token is invalid. try again!!!'
            error = new ErrorHandler(message, 400)

        }

        //handling expired JWT error
        if(err.name === 'TokenExpiredError') {
            const message = 'JSON Web Token is expired. try again!!!'
            error = new ErrorHandler(message, 400)

        }

        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
    
            
        })

        }

}