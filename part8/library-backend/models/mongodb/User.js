import mongoose from "mongoose";
import env from "../../utils/getEnv.js"
import { User } from "../../schema/mongodb/User.js";


mongoose.set('strictQuery',false)
mongoose.connect(env.MONGODB_URI,{dbName: env.MONGODB_DB_NAME})

export class UserModel {
    static async getAll()
      {
        return User.find({})
      }

    static async count({filter={},options={}}={}){

      if (filter && filter.id) {
        filter._id = filter.id;
        delete filter.id;
      }
      
      return User.countDocuments(filter,options)
    }
    
      static async findBy({filter={}}={})
      {
        if (filter && filter.id) {
          filter._id = filter.id;
          delete filter.id;
        }

        return User.find(filter)
      }
    
      static async create({input}){
          const data = new User(input)
    
          return (await data.save())
      }
    
      static async update({data,id}){
        return await User.findOneAndUpdate({_id:id},data,{ new: true,runValidators: true, context: 'query' })
      }
    
      static async delete({id}){

        const data = await User.findOneAndDelete({_id:id})
        if(!data) return null
    
        return data
      }
    
      static async deleteAll(){
        await User.deleteMany({})
      }
}