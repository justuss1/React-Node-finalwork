const express = require('express')
const router = express.Router()
const {registerUser, loginUser, createOrder, getAllOrders} = require('../controllers/main')
const {validateRegistration} = require("../middleware/validateEmail")
const {validateOrder} = require("../middleware/validateOrder")

router.post('/registerUser', validateRegistration, registerUser)

router.post('/loginUser', loginUser)

router.post('/createOrder', validateOrder, createOrder )

router.get('/allOrders', getAllOrders)


module.exports = router