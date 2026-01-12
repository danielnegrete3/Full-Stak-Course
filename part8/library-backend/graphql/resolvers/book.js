import { pse } from "../../index.js"
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
            addBook:ErrorHandler(async (...d)=>{
                const book = await functions.addBook(...d)

                pse.publish("BOOK_ADDED",{bookAdded:book})

                return book
            })
        },
        Subscription:{
            bookAdded:{
                subscribe: () => pse.asyncIterableIterator(["BOOK_ADDED"]),
            }
        }
    }
}
