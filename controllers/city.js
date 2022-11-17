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
        let query = {} 
        console.log(req.query)
        if (req.query.name) {
            query = {name:{"$regex": req.query.name, $options:'i'}}
        }
        if (req.query.continent) {
            query = {
                ...query,
                continent: req.query.continent.split(',')
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
        let oneCity = await City.findOneAndUpdate({_id: id}, req.body, {new:true})
        if (oneCity){
            res.status(200).json({
            id: oneCity._id,
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
    destroy: async(req, res) => {
        let { id } = req.params
        try {
            let oneCity = await City.findOneAndDelete({_id: id})
            if (oneCity){
                res.status(200).json({
                id: oneCity._id,
                success: true,
                message: 'The city has been deleted with success'
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
        }
}


module.exports = controller