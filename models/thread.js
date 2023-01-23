const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});
	
const threadSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [commentSchema]
}, {
    timestamps: true
});




module.exports = mongoose.model('Thread', threadSchema);