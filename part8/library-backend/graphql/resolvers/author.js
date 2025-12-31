import { AuthorFunctions } from "../../logic/author.js"

export const CreateAuthorResolver = (data)=>{
    const functions = new AuthorFunctions(data)
    return {
        Own:{
            Author: {
                bookCount:functions.bookCount.bind(functions)
            }
        },
        Query:{
            authorCount:functions.authorCount.bind(functions),
            allAuthors:functions.allAuthors.bind(functions),
        },
        Mutation:{
            editAuthor:functions.editAuthor.bind(functions),
        }
    }
}