
export const BookType = `
    type Book {
        title: String!
        published: Int!
        author: Author!
        genres: [String!]!
        id: ID!
    }
`

export const BookQueries = `
    bookCount: Int!
    allBooks(name:String,genres:[String],author:String): [Book!]!
`

export const BookMutations = `
    addBook(
      title: String!,
      author: String!,
      published: Int!,
      genres: [String!]!
    ):Book!
`