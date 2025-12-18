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
    return Blog.find({}).populate('user', '_id username name').populate({
                                                      path: 'comments',
                                                      populate: { 
                                                        path: 'user',
                                                        select: '_id username name'
                                                      }
                                                    }
                                                  )
  }

  static async findById({id,user})
  {
    return Blog.find({_id: id}).populate('user', '_id username name').populate({
                                                      path: 'comments',
                                                      populate: { 
                                                        path: 'user',
                                                        select: '_id username name'
                                                      }
                                                    }
                                                  )
  }

  static async create({input, user}){
      const newBlog = new Blog(input)

      //  save in user
      user.blogs.push(newBlog.id)
      await user.save()
      return (await newBlog.save()).populate('user', '_id username name').populate({
                                                      path: 'comments',
                                                      populate: { 
                                                        path: 'user',
                                                        select: '_id username name'
                                                      }
                                                    }
                                                  )
  }

  static async update({data,id}){
    return await Blog.findOneAndUpdate({_id:id},data,{ new: true,runValidators: true, context: 'query' }).populate('user', '_id username name').populate({
                                                                                                                                path: 'comments',
                                                                                                                                populate: { 
                                                                                                                                  path: 'user',
                                                                                                                                  select: '_id username name'
                                                                                                                                }
                                                                                                                              }
                                                                                                                            )
  }

  static async delete({id,user}){
    const blogDeleted = await Blog.findOneAndDelete({_id:id,user:user.id})
    if(!blogDeleted) return null
    
    //  delete to user
    const index = user.blogs.indexOf(id);
    if (index > -1) {
        user.blogs.splice(index, 1);
    }
    await user.save()

    return blogDeleted
  }

  static async deleteAll(){
    await Blog.deleteMany({})
  }

}

module.exports = {BlogModel,Blog}