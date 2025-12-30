import { AuthorModel } from "../../models/mongodb/Author.js";
import { BookModel } from "../../models/mongodb/Book.js";
import { CreateAuthorResolver } from "./author.js";
import { CreateBookResolver } from "./book.js";

const AuthorResolver = CreateAuthorResolver({model:AuthorModel})
const BookResolver = CreateBookResolver({model:BookModel})

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