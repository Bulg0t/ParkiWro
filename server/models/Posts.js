const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    parkId: { type: mongoose.Schema.Types.ObjectId, ref: 'park', required: true },
    comments: [
      {
        text: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
      }
    ]
  });

const PostModel = mongoose.model("post", postSchema)
module.exports = PostModel;