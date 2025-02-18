const mongoose = require('mongoose')

const userSchema = {
    username: {
      type:String,
      unique:true,
      required: true,
      minlength: [3, 'Username must be at least 3 characters long']
    },
    name: String,
    passwordHash: String,
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
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