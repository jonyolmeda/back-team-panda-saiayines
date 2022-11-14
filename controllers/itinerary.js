const Itinerary = require('../models/Itinerary')

 const controller = {
create: async(req, res) => {
    
    try {
        let new_itinerary = await Itinerary.create(req.body)
        res.status(201).json({
            id: new_itinerary._id,
            success: true,
            message: 'The itinerary has been created with success'
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
            let oneItinerary = await Itinerary.findOneAndUpdate({_id: id}, req.body, {new:true})
            if (oneItinerary){
                res.status(200).json({
                id: oneItinerary._id,
                success: true,
                message: 'The itinerary has been modificated with success'
            })
            } else {
                res.status(404).json({
                    success: false,
                    message: "The itinerary hasn't been found"
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