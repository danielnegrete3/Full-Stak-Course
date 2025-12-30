import { AuthorFunctions } from "../../logic/author.js"

export const CreateAuthorResolver = ({model})=>{
    const functions = new AuthorFunctions({model})

    return {
        Own:{
            Author: {
                bookCount:functions.bookCount
            }
        },
        Query:{
            authorCount:functions.authorCount,
            allAuthors:functions.allAuthors,
        },
        Mutation:{
            editAuthor:functions.editAuthor
        }
    }
}