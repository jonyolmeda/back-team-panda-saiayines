const City = require('../models/City')

const controller = {
    read: async(req, res) => {
        let { id } = req.params
        try {
            let oneCity = await City.findById(id).populate([{path:'userId',select:'name photo'}])
            if(id){
                res.status(200).json({
                    response: oneCity,
                    success: true,
                    message: 'City recovery succesfully'
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'No city found'
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