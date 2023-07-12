const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv')

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

dotenv.config({path:'./config.env'})

// 1) MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`))


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;

