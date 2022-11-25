const Itinerary = require('../models/Itinerary')

const controller = {
    read: async(req, res) => {
        let query = {};
        if(req.query.userId){
            query = {userId: req.query.userId};
        }
        try {
            let itineraries = await Itinerary.find(query)
           if(itineraries){
                res.status(200).json({
                    response: itineraries,
                    success: true,
                    message: 'Itineraries Found'
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'No Itineraries'
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