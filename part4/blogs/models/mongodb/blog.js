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
    return Blog.find({}).populate('user')
  }

  static async findById({id,user})
  {
    return Blog.find({_id: id}).populate('user')
  }

  static async create({input}){
    try{
      const newBlog = new Blog(input)
      return newBlog.save()
    }catch{
      return 400
    }
  }

  static async update({data,id}){
    return await Blog.findByIdAndUpdate(id,data,{ new: true,runValidators: true, context: 'query' }).populate('user')
  }

  static async delete({id}){
    return await Blog.findByIdAndDelete(id)
  }

}

module.exports = {BlogModel,Blog}