const path = require('path');
const express = require("express");
const dotenv = require("dotenv");
const colors =require("colors");
const morgan = require("morgan");

const connectDB = require('./config/db.js');

dotenv.config({ path : './config/config.env' });

//connecting to db
connectDB();

const app = express();
app.use(express.json());
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

//api endpoints
const transactions = require('./routes/transactions');
app.use('/api/v1/transactions',transactions);

if(process.env.NODE_ENV === 'production'){
    app.use("/",express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const PORT = 5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold);
})

