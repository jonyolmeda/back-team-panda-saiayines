const Hotel = require('../models/Hotel')

const controller = {
    read: async(req, res) => {
        let { id } = req.params
        try {
            let oneHotel = await Hotel.findById(id).populate([{path:'cityId', select: 'name'},{path:'userId',select:'name photo'}])
            if(id){
                res.status(200).json({
                    response: oneHotel,
                    success: true,
                    message: 'Hotel recovery succesfully'
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'No Hotel found'
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