const mongoose = require('mongoose')
const {createBlogSchema} = require('../../schemas/mongodb/blog')

const Blog = mongoose.model('Blog', createBlogSchema())
const mongoUrl = process.env.MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl,{ dbName: process.env.MONGODB_DB_NAME??'test' })

class BlogModel {

  static async getAll()
  {
    return Blog.find({})
  }

  static async findById({id})
  {
    return Blog.find({_id: id})
  }

}

module.exports = {BlogModel}