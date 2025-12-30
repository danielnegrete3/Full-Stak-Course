import { BookFunctions } from "../../logic/book.js"

export const CreateBookResolver = ({model})=>{
    const functions = new BookFunctions({model})
    
    return {
        Own:{
            Book:{
                author:functions.author
            }
        },
        Query:{
            bookCount:functions.bookCount,
            allBooks:functions.allBooks,
        },
        Mutation:{
            addBook:functions.addBook
        }
    }
}
