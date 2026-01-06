import { gql } from '@apollo/client'

export const ALL_BOOKS_ALL_GENRES = gql`
    query AllBooks($genres: [String!]) {
        allBooks(genres: $genres) {
            author {
                name
            }
            title
            published
            id
        }
        allGenres
  }
`

export const ALL_BOOKS = gql`
    query AllBooks($genres: [String!]) {
        allBooks(genres: $genres) {
            author {
                name
            }
            title
            published
            id
        }
  }
`