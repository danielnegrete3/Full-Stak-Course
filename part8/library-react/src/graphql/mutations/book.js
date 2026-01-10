import { gql } from '@apollo/client'
import { BOOK_BASIC_DATA } from '../fragments/book'

export const CREATE_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!)
    {
        addBook(title: $title, author: $author, published: $published, genres: $genres)
        {
            ...BookBasicData
        }
    }

    ${BOOK_BASIC_DATA}
`