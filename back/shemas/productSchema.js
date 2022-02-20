const mongoose = require("mongoose");
const Schema = mongoose.Schema

const product = new Schema({
    productName: {
        type: String,
    },
    productPhoto: {
        type: String,
    },
    
    productPrice: {
        type: String,
    }, 
    

})

module.exports = mongoose.model('ReactNodeAppFinalproduct', product)