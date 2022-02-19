const mongoose = require("mongoose");
const Schema = mongoose.Schema

const users = new Schema({
    email: {
        type: String,
    },
    
    password: {
        type: String,
    }, 
    
    secretKey: {
        type: String,
    },


})

module.exports = mongoose.model('ReactNodeAppFinal', users)