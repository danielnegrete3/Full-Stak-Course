import {  AuthorMutations, AuthorQueries, AuthorType } from "./types/author.type.js";
import { BookMutations, BookQueries, BookType } from "./types/book.type.js";



export const IndexDef = `
    type Query {
        ${AuthorQueries}
        ${BookQueries}
    }

    type Mutation {
        ${AuthorMutations}
        ${BookMutations}
    }

    ${AuthorType}
    ${BookType}
`
