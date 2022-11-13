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
