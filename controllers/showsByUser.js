const Show = require('../models/Show')

const controller = {
    read: async(req, res) => {
        let query = {};
        if(req.query.userId){
            query = {userId: req.query.userId};
        }
        try {
            let shows = await Show.find(query)
           if(shows){
                res.status(200).json({
                    response: shows,
                    success: true,
                    message: 'Shows Found'
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'No Shows'
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