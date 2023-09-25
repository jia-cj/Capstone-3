const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const errorMiddleware = require('./middlewares/errors');

//setting up config files
//dotenv.config({ path: 'config/config.env' })

const app = express();

//PORTS
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'DEVELOPMENT'
const JWT_SECRET = process.env.JWT_SECRET || 'your-default-jwt-secret';
const JWT_EXPIRES_TIME = process.env.JWT_EXPIRES_TIME || '1d';
const COOKIE_EXPIRES_TIME = process.env.COOKIE_EXPIRES_TIME || 7;

const SMTP_HOST = process.env.SMTP_HOST || 'sandbox.smtp.mailtrap.io';
const SMTP_PORT = process.env.SMTP_PORT || 2525;
const SMTP_EMAIL = process.env.SMTP_EMAIL || 'your-smtp-email';
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || 'your-smtp-password';
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@e-commerce.com';
const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME || 'E-Commerce Store';



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());


//Connecting to Database
mongoose.connect("mongodb+srv://admin123:Batch297@batch-297.wrphas9.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let inventoryDB = mongoose.connection;
inventoryDB.on('error', console.error.bind(console, "connection error"));
inventoryDB.on('open', () => console.log("connected to mongoDB Atlas"))

const server = app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
})

//routes
const products = require('./routes/product');
const users = require('./routes/user');
const orders = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', users)
app.use('/api/v1', orders)

// handle unhandled promise rejections
process.on('unhandledRejection', err => {
        console.log(`ERROR: ${err.stack}`)
        console.log(`Shutting down the server due to unhandled promise rejection`);
        server.close(() => {
                process.exit(1)
        })
})

//handled uncaught exceptions
process.on('uncaughtException', err => {
        console.log(`ERROR: ${err.stack}`);
        console.log(`Shutting down the server due to uncaught exceptions`);
        process.exit(1);
})

//Middleware for handling errors
app.use(errorMiddleware);

module.exports = app;