import { BookFunctions } from "../../logic/book.js"

export const CreateBookResolver = (data)=>{
    const functions = new BookFunctions(data)
    return {
        Own:{
            Book:{
                author:functions.author.bind(functions)
            }
        },
        Query:{
            bookCount:functions.bookCount.bind(functions),
            allBooks:functions.allBooks.bind(functions),
        },
        Mutation:{
            addBook:functions.addBook.bind(functions)
        }
    }
}
