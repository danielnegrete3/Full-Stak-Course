
export const AuthorType = `
  type Author {
    name: String!
    born:Int
    bookCount:Int!
    id: ID!
  }
`

export const AuthorQueries = `
    authorCount: Int!
    allAuthors: [Author!]!
`

export const AuthorMutations = `
    editAuthor(name:String!,born:Int):Author!
`