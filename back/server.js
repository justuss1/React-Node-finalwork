const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

app.use(cors())
app.use(express.json())
app.listen(4000)

mongoose.connect("mongodb+srv://Justinas:cGgUHDFs306FYRyw@cluster0.erwoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(res => {
        console.log('connection good')
    }).catch(e => {
    console.log(e)
})

const router = require("./routes/mainRoutes")
app.use("/", router)

