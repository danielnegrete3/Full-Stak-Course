const mongoose = require('mongoose')
const {createCommentSchema} = require('../../schemas/mongodb/comment')

const Comment = mongoose.model('Comment', createCommentSchema())
const {MONGODB_URI,MONGODB_DB_NAME} = require('./../../utils/getEnv')
const mongoUrl = MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl,{ dbName: MONGODB_DB_NAME??'test' })

class CommentModel {

  static async getAll()
  {
    return Comment.find({}).populate('blog')
  }

  static async findById({id,user})
  {
    return Comment.find({_id: id}).populate('blog')
  }

  static async create({input, user}){
      const newItem = new Comment(input)

      //  save in user
      user.comments.push(newItem.id)
      await user.save()
      return (await newItem.save()).populate('user')
  }

  static async update({data,id}){
    return await Comment.findOneAndUpdate({_id:id},data,{ new: true,runValidators: true, context: 'query' }).populate('user')
  }

  static async delete({id,user}){
    const toDelete = await Comment.findOneAndDelete({_id:id,user:user.id})
    if(!toDelete) return null
    
    //  delete to user
    const index = user.comments.indexOf(id);
    if (index > -1) {
        user.comments.splice(index, 1);
    }
    await user.save()

    return toDelete
  }

  static async deleteAll(){
    await Comment.deleteMany({})
  }

}

module.exports = {CommentModel,Comment}