const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "The hotel has been created with success",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async(req, res) => {
    let query = {}
    let order = {}
    if(req.query.name){
        query = {name: {"$regex": req.query.name, $options: 'i'}} 
    }
    if(req.query.order){
        order = {name: req.query.order}
    }
    try {
        let read_hotel = await Hotel.find(query).sort(order)
        if(read_hotel.length > 2){
          res.status(200).json({
              response: read_hotel,
              success: true,
              message: 'The hotels has been found'
          })
        }else if(read_hotel.length < 2){
          res.status(404).json({
            succes:false,
            massage: 'Hotels not found'
          })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
    },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let oneHotel = await Hotel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (oneHotel) {
        res.status(200).json({
          id: oneHotel._id,
          success: true,
          message: "The hotel has been modificated with success",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The hotel hasn't been found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let oneHotel = await Hotel.findOneAndDelete({ _id: id });
      if (oneHotel) {
        res.status(200).json({
          id: oneHotel._id,
          success: true,
          message: "The hotel has been deleted with success",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The hotel hasn't been found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};


module.exports = controller;
