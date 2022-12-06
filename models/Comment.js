const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    photoUser:{type: String, required: true},
    nameUser: {type: String, required: true},
    roleUser: {type: String, required: true},
    showId:{type: mongoose.Types.ObjectId, ref:"shows" ,required: true},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true},
    date: {type: Date, required: true},
    comment:[{type: String, required: true}],
})
const Comment = mongoose.model('comment',schema);

module.exports = Comment
