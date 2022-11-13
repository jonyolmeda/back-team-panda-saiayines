const Itinerary = require('../models/Show')

 const controller = {
create: async(req, res) => {
    
    try {
        let new_show = await Itinerary.create(req.body)
        res.status(201).json({
            id: new_show._id,
            success: true,
            message: 'The show has been created with success'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
    },
}
module.exports = controller