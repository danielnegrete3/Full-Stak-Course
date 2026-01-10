import {  AuthorMutations, AuthorQueries, AuthorType } from "./types/author.type.js";
import { BookMutations, BookQueries, BookSubscriptions, BookType } from "./types/book.type.js";
import { UserMutations, UserQueries, UserType } from "./types/user.type.js";



export const IndexDef = `
    type Query {
        ${AuthorQueries}
        ${BookQueries}
        ${UserQueries}
    }

    type Mutation {
        ${AuthorMutations}
        ${BookMutations}
        ${UserMutations}
    }

    type Subscription {
        ${BookSubscriptions}
    }

    ${AuthorType}
    ${BookType}
    ${UserType}
`
