const mongoose = require('mongoose')

const blogSchema = {
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
}

const createBlogSchema = () => {
  const schema = new mongoose.Schema(blogSchema)
  schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }})
  return schema
}

module.exports = {createBlogSchema,blogSchema}