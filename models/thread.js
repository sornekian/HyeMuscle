const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: String,
  userAvatar: String,
    
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
  comments: [commentSchema],
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: String,
  userAvatar: String,
    
}, {
    timestamps: true
});




module.exports = mongoose.model('Thread', threadSchema);