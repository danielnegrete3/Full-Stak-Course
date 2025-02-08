const mongoose = require('mongoose')
const {createBlogSchema} = require('../../schemas/mongodb/blog')

const Blog = mongoose.model('Blog', createBlogSchema())
const {MONGODB_URI,MONGODB_DB_NAME} = require('./../../utils/getEnv')
const mongoUrl = MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl,{ dbName: MONGODB_DB_NAME??'test' })

class BlogModel {

  static async getAll()
  {
    return Blog.find({})
  }

  static async findById({id})
  {
    return Blog.find({_id: id})
  }

  static async create({input}){
    const newBlog = new Blog(input)
    return newBlog.save()
  }

  static async update({data,id}){

    return await Blog.findByIdAndUpdate(id,data,{ new: true,runValidators: true, context: 'query' })
  }

  static async delete({id}){
    return await Blog.findByIdAndDelete(id)
  }

}

module.exports = {BlogModel,Blog}