const mongoose = require('mongoose')
const {createUserSchema} = require('../../schemas/mongodb/user')
const bcrypt = require('bcrypt')
const User = mongoose.model('User', createUserSchema())
const {MONGODB_URI,MONGODB_DB_NAME} = require('./../../utils/getEnv')
const mongoUrl = MONGODB_URI
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl,{ dbName: MONGODB_DB_NAME??'test' })

class UserModel {
    static async getAll()
      {
        return User.find({}).populate('blogs')
      }
    
      static async findById({id})
      {
        return User.findById(id).populate('blogs')
      }

      static async login({username,password}){
        const user = await User.findOne({ username })
        const valid = user === null ? false :await bcrypt.compare(password, user.passwordHash)

        return {user, valid}
      }
    
      static async create({input}){
        try{
          const newUser = new User(input)
          console.log(newUser)
          return newUser.save()
        }catch{
          return 400
        }
      }
    
      static async update({data,id}){
    
        return await User.findByIdAndUpdate(id,data,{ new: true,runValidators: true, context: 'query' }).populate('blogs')
      }
    
      static async delete({id}){
        return await User.findByIdAndDelete(id)
      }
}

module.exports = {UserModel,User}