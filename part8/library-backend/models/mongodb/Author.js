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
    
      static async findById({id})
      {
        return Author.find({_id: id})
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