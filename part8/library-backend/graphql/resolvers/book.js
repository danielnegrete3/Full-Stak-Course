import { ee } from "../../index.js"
import { BookFunctions } from "../../logic/book.js"
import { ErrorHandler } from "../../utils/ErrorHandler.js"
import { createAsyncIterator } from "../../utils/pubsub.js"

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

                ee.emit('BOOK_ADDED', { bookAdded: book });

                return book
            })
        },
        Subscription:{
            bookAdded:{
                subscribe: () => createAsyncIterator('BOOK_ADDED'),
            }
        }
    }
}
