const Reaction = require('../models/Reaction')

 const controller = {
create: async(req, res) => {
    
    try {
        let new_reaction = await Reaction.create(req.body)
        res.status(201).json({
            id: new_reaction._id,
            success: true,
            data: new_reaction,
            message: 'The reaction has been created with success'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: error
        })
    }
    },

    updateReaction: async (req, res) => {

        let query = {};
        let id = req.user.id

        if (req.query.itineraryId) {
            query = {
                itineraryId: req.query.itineraryId
            };
        }

        if (req.query.name) {
            query = {
                ...query,
                name: req.query.name
            };
        }
        try {
            let reaction = await Reaction.findOne(query)
            if (reaction) {
                if (reaction.userId.includes(id)) {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: { userId: id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Event dis${reaction.name}`,
                        success: true,
                        reactioned: false,
                    })
                } else {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: { userId: id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Event ${reaction.name}`,
                        success: true,
                        reactioned: true,
                    })
                }
            } else {
                res.status(404).json({
                    message: `The reaction doesn´t exist in the itinerary`,
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    read: async (req, res) => {
        let query = {};
        if (req.query.itineraryId) {
          query = { itineraryId: req.query.itineraryId };
        }
        if(req.query.userId){
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        try {
          let reactions = await Reaction.find(query)
          .populate({ path: "userId", select: "name lastName photo"})
          .populate({ path: "itineraryId", select: "name  photo _id"})
          if (reactions) {
            res.status(200).json({
              data: reactions,
              id: req.query.itineraryId,
              success: true,
              message: "all reactions",
            });
          } else {
            res.status(404).json({
              success: false,
              message: "No reactions found",
              data: [],
            });
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
            data: error,
          });
        }
      },
      destroy: async (req, res) => {
        let { id } = req.params;
    
        try {
          let response = await Reaction.findOneAndUpdate(
            { _id: id },
            { $pull: { userId: req.user.id } },
            { new: true }
          );
          res.status(200).json({
            message: `reaction removed`,
            success: true,
            response,
          });
        } catch (error) {
          res.status(400).json({
            message: error.message,
            success: false,
          });
        }
      },
}

    module.exports = controller