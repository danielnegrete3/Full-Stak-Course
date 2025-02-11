const mongoose = require('mongoose')

const userSchema = {
    username: String,
    name: String,
    passwordHash: String,
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
      }
    ],
  }

  const createUserSchema = () => {
    const schema = new mongoose.Schema(userSchema)
    schema.set('toJSON', {
      transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }})
    return schema
  }

  module.exports = {createUserSchema,userSchema}