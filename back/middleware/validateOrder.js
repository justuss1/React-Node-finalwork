

module.exports = {

    validateOrder: (req, res, next) => {
        const {
            orderName,
            product,
            quantity
        } = req.body 

        

        if(orderName.length<=5) {
            return res.send({message: "order name is too short"})
        }

        if(product.lenght <=5 ) {
            return res.send({message: "product name is too short"})
        }

        if(quantity <= 0 ) {
            return res.send({message: "quntitiy must be above 0"})
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
