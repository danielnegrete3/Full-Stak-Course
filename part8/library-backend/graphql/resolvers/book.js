import { BookFunctions } from "../../logic/book.js"
import { ErrorHandler } from "../../utils/ErrorHandler.js"

export const CreateBookResolver = (data)=>{
    const functions = new BookFunctions(data)
    return {
        Own:{
            Book:{
                author:ErrorHandler(functions.author)
            }
        },
        Query:{
            bookCount:ErrorHandler(functions.bookCount),
            allBooks:ErrorHandler(functions.allBooks),
            allGenres:ErrorHandler(functions.allGenres),
        },
        Mutation:{
            addBook:ErrorHandler(functions.addBook)
        }
    }
}
