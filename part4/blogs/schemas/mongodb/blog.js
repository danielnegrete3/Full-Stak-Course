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
    required: true,
    default: 0,
  }
}

const optionsBlogSchema = {
  methods:{
    toJson:{
      transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
      }
    }

  }
}

const createBlogSchema = () => new mongoose.Schema(blogSchema,optionsBlogSchema)

module.exports = {createBlogSchema,blogSchema,optionsBlogSchema}