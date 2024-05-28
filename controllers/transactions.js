const Transaction = require('../models/Transaction.js');

//desc Get all transactions
//route GET /api/v1/transactions
//access Public
const getTransactions=async (req,res,next)=>{
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data : transactions
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,error:"Server Error"});
    }
}

//desc Add a transaction
//route POST /api/v1/transactions
//access Public
const addTransaction=async (req,res,next)=>{
    try {
        const {text,amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({success:true,data:transaction})
    } catch (error) {
       if(error.name === 'ValidationError'){
        const messages = Object.values(error.errors).map(val=>val.message);

        res.status(400).json({
            success:false,
            error : messages
        })
       }else{
        return res.status(500)
        .json({success:false,error:"Server Error"})
       }
    }
}

//desc Delete a transaction
//route POST /api/v1/transactions/:id
//access Public
const deleteTransaction=async (req,res,next)=>{
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"No Transaction found"
            })
        }
        await Transaction.findByIdAndDelete(transaction._id);
        res.status(200).json({
            success:true,
            data:[],
            message:"Transaction Deleted"
        })
    } catch (error) {
        return res.status(500)
        .json({success:false,error:"Server Error"})
    }
}
module.exports={
    getTransactions,
    addTransaction,
    deleteTransaction
}
