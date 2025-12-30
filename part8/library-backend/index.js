import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import {IndexDef} from './graphql/schema/index.js'
import {resolvers} from './graphql/resolvers/index.js'

const server = new ApolloServer({
  typeDefs:IndexDef,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})