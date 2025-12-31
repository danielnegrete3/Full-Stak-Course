import mongoose from "mongoose";
import env  from "../../utils/getEnv.js"
import { Author } from "../../schema/mongodb/Author.js";


mongoose.set('strictQuery',false)
mongoose.connect(env.MONGODB_URI,{dbName: env.MONGODB_DB_NAME})

export class AuthorModel {
    static async getAll()
    {
      return Author.find({})
    }

    static async count({filter={},options={}}={}){
      if (filter && filter.id) {
        filter._id = filter.id;
        delete filter.id;
      }
      return Author.countDocuments(filter,options)
    }
    
    static async findBy({filter={}}={})
    {
      if (filter && filter.id) {
        filter._id = filter.id;
        delete filter.id;
      }
           
      return Author.find(filter)
    }
    
    static async create({input}){
        const data = new Author(input)
  
        return (await data.save())
    }
    
    static async update({data,id}){
      return await Author.findOneAndUpdate({_id:id},data,{ new: true,runValidators: true, context: 'query' })
    }
  
    static async delete({id}){

      const data = await Author.findOneAndDelete({_id:id})
      if(!data) return null
  
      return data
    }
  
    static async deleteAll(){
      await Author.deleteMany({})
    }
}