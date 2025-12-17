const mongoose = require('mongoose')

const commentSchema = {
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  }
}

const createCommentSchema = () => {
  const schema = new mongoose.Schema(commentSchema)
  schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }})
  return schema
}

module.exports = {createCommentSchema,commentSchema}