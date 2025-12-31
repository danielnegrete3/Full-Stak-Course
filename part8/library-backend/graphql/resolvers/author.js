import { AuthorFunctions } from "../../logic/author.js"
import { ErrorHandler } from "../../utils/ErrorHandler.js"

export const CreateAuthorResolver = (data)=>{
    const functions = new AuthorFunctions(data)
    return {
        Own:{
            Author: {
                bookCount:ErrorHandler(functions.bookCount)
            }
        },
        Query:{
            authorCount:ErrorHandler(functions.authorCount),
            allAuthors:ErrorHandler(functions.allAuthors),
        },
        Mutation:{
            editAuthor:ErrorHandler(functions.editAuthor),
        }
    }
}