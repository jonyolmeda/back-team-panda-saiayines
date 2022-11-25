const City = require('../models/City')

const controller = {
    read: async(req, res) => {
        let query = {};
        if(req.query.userId){
            query = {userId: req.query.userId};
        }
        try {
            let cities = await City.find(query)
           if(cities){
                res.status(200).json({
                    response: cities,
                    success: true,
                    message: 'Cities Found'
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'No Cities'
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

module.exports = controller;