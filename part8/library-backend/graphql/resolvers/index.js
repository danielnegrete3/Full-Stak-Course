import { AuthorModel } from "../../models/mongodb/Author.js";
import { BookModel } from "../../models/mongodb/Book.js";
import { CreateAuthorResolver } from "./author.js";
import { CreateBookResolver } from "./book.js";

const AuthorResolver = CreateAuthorResolver({AuthorModel,BookModel})
const BookResolver = CreateBookResolver({BookModel,AuthorModel})

const Query = {
    ...AuthorResolver.Query,
    ...BookResolver.Query,
}

const Mutation = {
    ...AuthorResolver.Mutation,
    ...BookResolver.Mutation,
}

export const resolvers = {
    Query,
    Mutation,
    ...AuthorResolver.Own,
    ...BookResolver.Own,
}