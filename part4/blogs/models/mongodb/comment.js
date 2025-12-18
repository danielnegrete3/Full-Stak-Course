const mongoose = require('mongoose')
const {createCommentSchema} = require('../../schemas/mongodb/comment')

const Comment = mongoose.model('Comment', createCommentSchema())
const {MONGODB_URI, MONGODB_DB_NAME} = require('./../../utils/getEnv')
const { Blog } = require('./blog')
const mongoUrl = MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl, { dbName: MONGODB_DB_NAME ?? 'test' })

class CommentModel {

  static async getAll() {
    return Comment.find({})
      .populate('blog', 'title author')
      .populate('user', '_id username name')
  }

  static async findById(id) {
    return Comment.findById(id)
      .populate('blog', 'title author')
      .populate('user', '_id username name')
  }

  static async create({input, user}) {

    try {
      const blog = await Blog.findById(input.blog)
      if (!blog) {
        throw new Error('Blog not find')
      }

      const commentData = {
        message: input.message,
        blog: input.blog,
        user: user._id
      }
      
      const newItem = new Comment(commentData)
      
      const savedComment = await newItem.save()
      
      if (user.comments) {
        user.comments.push(savedComment._id)
        await user.save()
      }

      blog.comments = blog.comments || []
      blog.comments.push(savedComment._id)
      await blog.save()

      return Comment.findById(savedComment._id)
        .populate('blog', 'title author')
        .populate('user', '_id username name')
        
    } catch (error) {
      console.error('Error en CommentModel.create:', error)
      throw error
    }
  }

  static async update({data, id}) {
    const updateData = { message: data.message }
    
    return await Comment.findByIdAndUpdate(
      id, 
      updateData, 
      { 
        new: true,
        runValidators: true 
      }
    )
    .populate('blog', 'title author')
    .populate('user', '_id username name')
  }

  static async delete({id, user}) {
    try {
      const toDelete = await Comment.findOneAndDelete({
        _id: id,
        user: user._id  
      })
      
      if (!toDelete) {
        return null
      }
      
      if (user.comments) {
        const userIndex = user.comments.indexOf(id)
        if (userIndex > -1) {
          user.comments.splice(userIndex, 1)
          await user.save()
        }
      }
      
      const blog = await Blog.findById(toDelete.blog)
      if (blog && blog.comments) {
        const blogIndex = blog.comments.indexOf(id)
        if (blogIndex > -1) {
          blog.comments.splice(blogIndex, 1)
          await blog.save()
        }
      }
      
      return toDelete
      
    } catch (error) {
      console.error('Error en CommentModel.delete:', error)
      throw error
    }
  }

  static async deleteAll() {
    await Comment.deleteMany({})
  }
}

module.exports = {CommentModel, Comment}