import { gql } from '@apollo/client'
import { BOOK_BASIC_DATA } from '../fragments/book'

export const ALL_BOOKS_ALL_GENRES = gql`
    query AllBooks($genres: [String!]) {
        allBooks(genres: $genres) {
            ...BookBasicData
        }
        allGenres
    }
    ${BOOK_BASIC_DATA}
`

export const ALL_BOOKS = gql`
    query AllBooks($genres: [String!]) {
        allBooks(genres: $genres) {
            ...BookBasicData
        }
    }
    ${BOOK_BASIC_DATA}

`