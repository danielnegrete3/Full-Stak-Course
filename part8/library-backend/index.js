import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import {IndexDef} from './graphql/schema/index.js'
import {GenereateResolvers} from './graphql/resolvers/index.js'
import { UserModel } from './models/mongodb/User.js'
import { UserContextMiddleware } from './middlewares/UserContextMiddleware.js'
import { BookModel } from './models/mongodb/Book.js'
import { AuthorModel } from './models/mongodb/Author.js'

const models = {
  UserModel,
  BookModel,
  AuthorModel
}

const server = new ApolloServer({
  typeDefs:IndexDef,
  resolvers:GenereateResolvers(models),
})

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: UserContextMiddleware({UserModel})
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})