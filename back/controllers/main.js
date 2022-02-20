const userSchema = require("../shemas/userSchema")
const orderSchema = require("../shemas/orderSchema")
const {nanoid} = require('nanoid')
//const { validate } = require("../shemas/userSchema")

module.exports = { 
    registerUser: async (req, res) => {
        const {email, password1} = req.body
       
        const userExists = await userSchema.findOne({email})

        if(!!userExists) {
            return res.send({message: "email already registered"})
        }
        
        const user = new userSchema
        user.email = email
        user.password = password1
        user.secretKey = nanoid()
        await user.save()
        res.send({msg:"User created"})

    },

    loginUser: async (req, res) => {
        const {email, password} = req.body
        const validateUser = await userSchema.findOne({email})

        if(!!validateUser){
            if(validateUser.password === password){
                console.log(validateUser);
                res.send({validateUser})
            }
        }
    },
    createOrder: async (req, res) => {
        const {orderName, product, quantity, secretKey} = req.body
        const order = new orderSchema()
        order.orderName = orderName
        order.product = product
        order.quantity = quantity
        order.secretKey = secretKey
        await order.save()
        res.send({success: true})
    },

    getAllOrders: async (req, res) => {
        const orders = await orderSchema.find()
        res.send({orders})
    },

    getOrder: async (req, res) => {
        const {id} = req.params
        const order = await orderSchema.findOne({_id: id})
        res.send({order})
    },

    deleteOrder: async (req, res) => {
        const {id} = req.params
        await orderSchema.findOneAndDelete({_id: id})

        res.send({success: true})
    }



}
