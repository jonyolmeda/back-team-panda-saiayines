const Show = require("../models/Show");

const controller = {
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "The show has been created with success",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
    read: async(req, res) => {
      try {
        let show = await Show.find(req.query).populate('hotelId','name')
        show
        ? res.status(200).json({
            response: show.map((e) => ({
              hotelId: e.hotelId,
              name: e.name,
              photo: e.photo,
              description: e.description,
              price: e.price,
              date: e.date,
              userId: e.userId
            })),
            success: true,
            message: 'The show has been found',
        })
        : res.status(404).json({
          succes: false,
          message: "Show not found"
        })
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
      let oneShow = await Show.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (oneShow) {
        res.status(200).json({
          id: oneShow._id,
          success: true,
          message: "The show has been modificated with success",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The show hasn't been found",
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
      let oneShow = await Show.findOneAndDelete({ _id: id });
      if (oneShow) {
        res.status(200).json({
          id: oneShow._id,
          success: true,
          message: "The show has been deleted with success",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The show hasn't been found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
