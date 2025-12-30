import mongoose from "mongoose";
import env from "../../utils/getEnv.js"
import { Book } from "../../schema/mongodb/Book.js";


mongoose.set('strictQuery',false)
mongoose.connect(env.MONGODB_URI,{dbName: env.MONGODB_DB_NAME})

export class BookModel {
    static async getAll()
      {
        return Book.find({})
      }
    
      static async findById({id})
      {
        return Book.find({_id: id})
      }
    
      static async create({input}){
          const data = new Book(input)
    
          return (await data.save())
      }
    
      static async update({data,id}){
        return await Book.findOneAndUpdate({_id:id},data,{ new: true,runValidators: true, context: 'query' })
      }
    
      static async delete({id}){

        const data = await Book.findOneAndDelete({_id:id})
        if(!data) return null
    
        return data
      }
    
      static async deleteAll(){
        await Book.deleteMany({})
      }
}