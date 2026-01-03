import { AuthorModel } from "../../models/mongodb/Author.js";
import { BookModel } from "../../models/mongodb/Book.js";
import { UserModel } from "../../models/mongodb/User.js";
import { CreateAuthorResolver } from "./author.js";
import { CreateBookResolver } from "./book.js";
import { CreateUserResolver } from "./user.js";


export const GenereateResolvers = (models) => {
    const FunctionResolvers = [
        CreateAuthorResolver(models),
        CreateBookResolver(models),
        CreateUserResolver(models),
    ]
    let resolvers = {}
    let Query = {}
    let Mutation = {}

    FunctionResolvers.forEach(resolver => {
        Query = {...Query,...resolver.Query}
        Mutation = {...Mutation, ...resolver.Mutation}
        resolvers = {...resolvers, ...resolver.Own}
    })

    return {...resolvers,Query,Mutation}
}
