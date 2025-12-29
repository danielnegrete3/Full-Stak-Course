const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { v1: uuid } = require('uuid')

let books = []
let authors = []

const typeDefs = `
    type Book {
      title: String!
      author:String!
      Author:Author!
      published:Int!
      genres: [String!]!
      id: ID!
    }

  type Author {
    name: String!
    born:Int
    bookCount:Int!
    id: ID!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(name:String,genre:String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!,
      author: String!,
      published: Int!,
      genres: [String!]!
    ):Book!

    editAuthor(name:String!,born:Int):Author!
  }
`

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (root,args) => books.filter((val) => {
      if(args.genre && !val.genres.includes(args.genre) ) return false
      if(args.name && val.author != args.name) return false
      return true
    }),
    allAuthors: (root,args) => authors,
  },
  Mutation:{
    addBook: (root,args) => {
      var newBook = {
        title: args.title,
        author:args.author,
        published:args.published,
        genres: args.genres,
      }
      books.push(newBook)
      if(!authors.find((val)=>val.name === args.author)){
        authors.push({
          name:args.author,
          born:null,
        })
      }
      return newBook
    },
    editAuthor: (root,args) => {
      var item = authors.find((val) => val.name === args.name)

      if(args.born) item.born = args.born
      authors = authors.map((val) => {
        if(val.name === item.name) return item
        return val
      })
      
      return item
    }
  },
  Book: {
    Author:(root) => authors.find((val)=> val === root.author)
  },
  Author:{
    bookCount:(root) => books.reduce((prev,curr,indx)=>{if(curr.author === root.name) return prev + 1; return prev},0)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})