const Comments = require('../models/Comment')

const controller = {
    create: async (req,res) => {
        let {user} = req;
        try{
            let new_comment = await Comments.create({
                userId: user.id,
                showId: req.body.showId,
                date: req.body.date,
                comment: req.body.comment,
                nameUser: user.name,
                photoUser: user.photo,
                roleUser: user.role
        })
        res.status(200).json({
            response: new_comment,
            success: true,
            message: 'The Comment was successfully created.',
        })
        }catch(error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    read: async (req, res) => {
        let query = {};
        if (req.query.date) {
            date = { date: req.query.date }
        }
        if(req.query.showId){
            query = {showId: req.query.showId};
        }

        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId};
          }

      
        try {
            let comments = await Comments.find(query).sort({ date: -1 });
            if (comments) {
                res.status(200).json({
                    response: comments,
                    success: true,
                    message: 'Comments  founded.',

                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No founded',
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    update:async (req, res) => {
      let { id } = req.params;
      let { user } = req
      console.log(req)
      try {
          let comment = await Comments.findOneAndUpdate({ _id: id }, {
          comment: req.body.comment,
          showId: req.body.showId,
          itineraryId: req.body.itineraryId,
          date: req.body.date,
          userId: user.id,
          name: user.name,
          photo: user.photo,
      }, {
          new: true,
      });
      if (comment) {
      res.status(200).json({
          id: comment._id,
          success: true,
          message: "The Comment has been modified succesfully",
          });
      } else {
      res.status(404).json({
          success: false,
          message: "The comment was't found",
          });
      }
      } catch (error) {
          console.log(error)
      res.status(400).json({
          success: false,
          message: error.message,
      });
  }},

  destroy:async (req, res) => {
      let { id } = req.params;
      try {
          let oneComment = await Comments.findOneAndDelete({ _id: id});
          if (oneComment) {
          res.status(200).json({
              success: true,
              message: "The comment has been deleted succesfully",
          });
      } else {
          res.status(404).json({
          success: false,
          message: "The comment was't found",
          });
      }
      } catch (error) {
      res.status(400).json({
          success: false,
          message: error.message,
      });
  }
  },


}
module.exports = controller;