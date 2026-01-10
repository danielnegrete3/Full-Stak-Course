import { gql } from '@apollo/client'
import { BOOK_BASIC_DATA } from '../fragments/book'

export const BOOK_ADDED = gql`

    subscription {
        bookAdded {
            ...BookBasicData
            genres
        }
    }
        
    ${BOOK_BASIC_DATA}
`