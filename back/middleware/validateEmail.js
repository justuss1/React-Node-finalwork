const EmailValidator = require('email-validator')

module.exports = {

    validateRegistration: (req, res, next) => {
        const {
            email,
            password1,
            password2
        } = req.body 

        const validEmail = EmailValidator.validate(email);

        if(!validEmail) {
            return res.send({message: "email is not good"})
        }

        if(password1 != password2) {
            return res.send({message: "passwords does not match"})
        }

        next()
    },

    // validatePost: (req, res, next) => {

    //     const {
    //         image,
    //         title,
    //         description,
    //         secret
    //     } = req.body

    //     if(!image.includes('http')) {
    //         return res.send({error: true, message: 'image without http'})
    //     }
        
    //     if(!(title.length >= 10 && title.length <= 300)) {
    //         return res.send({error: true, message: 'wrong title length'})
    //     }

    //     if(!(description.length >= 50 && description.length <= 500)) {
    //         return res.send({error: true, message: 'wrong description length'})
    //     }
    //     if(!secret) {
    //         return res.send({error: true, message: 'no secret key'})
    //     }

    // next()

    }
