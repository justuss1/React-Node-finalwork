const mongoose = require("mongoose");
const Schema = mongoose.Schema

const orders = new Schema({
    orderName: {
        type: String,
    },
    
    product: {
        type: String,
    }, 
    
    quantity: {
        type: Number,
    },
    
    secretKey: {
        type: String,
    },


})

module.exports = mongoose.model('ReactNodeAppFinalOrders', orders)