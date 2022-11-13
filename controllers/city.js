const City = require('../models/City')

 const controller = {
create: async(req, res) => {
    
    try {
        let new_city = await City.create(req.body)
        res.status(201).json({
            id: new_city._id,
            success: true,
            message: 'The city has been created with success'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
    },

    read: async(req, res) => {
        let { query } = req
        console.log(req.query)
        if (req.query.name) {
            query = req.query.name
        }
        if (req.query.continent) {
            query = {
                ...query,
                continent: req.query.continent
            }
        }
        try {
            let read_city = await City.find(query)
            res.status(200).json({
                response: read_city,
                success: true,
                message: 'The cities has been found'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
        },

update: async(req, res) => {
    let { id } = req.params
    try {
        let uno = await City.findOneAndUpdate({_id: id}, req.body, {new:true})
        if (uno){
            res.status(200).json({
            id: uno._id,
            success: true,
            message: 'The city has been modificated with success'
        })
        } else {
            res.status(404).json({
                success: false,
                message: "The city hasn't been found"
            })
        }       
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
    },
}


module.exports = controller