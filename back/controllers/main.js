const userSchema = require("../shemas/userSchema")
const {nanoid} = require('nanoid')
const { validate } = require("../shemas/userSchema")

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
                const skey = validateUser.secretKey
                console.log(skey);
                res.send({validateUser})
              
            }

        }

    }
}
