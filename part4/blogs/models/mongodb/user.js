const mongoose = require('mongoose')
const {createUserSchema} = require('../../schemas/mongodb/user')

const User = mongoose.model('User', createUserSchema())
const {MONGODB_URI,MONGODB_DB_NAME} = require('./../../utils/getEnv')
const mongoUrl = MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl,{ dbName: MONGODB_DB_NAME??'test' })

class UserModel {
    static async getAll()
      {
        return User.find({})
      }
    
      static async findById({id})
      {
        return User.find({_id: id})
      }
    
      static async create({input}){
        try{
          const newUser = new User(input)
          return newUser.save()
        }catch{
          return 400
        }
      }
    
      static async update({data,id}){
    
        return await User.findByIdAndUpdate(id,data,{ new: true,runValidators: true, context: 'query' })
      }
    
      static async delete({id}){
        return await User.findByIdAndDelete(id)
      }
}

module.exports = {UserModel,User}