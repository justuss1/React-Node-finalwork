const express = require('express')
const router = express.Router()
const {registerUser, loginUser, createOrder} = require('../controllers/main')
const {validateRegistration} = require("../middleware/validateEmail")

router.post('/registerUser', validateRegistration, registerUser)

router.post('/loginUser', loginUser)

router.post('/createOrder', createOrder )


module.exports = router