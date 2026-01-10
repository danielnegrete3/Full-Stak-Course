import { gql } from '@apollo/client'
import { AUTHOR_ALL_DATA } from '../fragments/author'

export const ALL_AUTHORS = gql`
    query {
        allAuthors{
            ...AuthorAllData
        }
    }
    ${AUTHOR_ALL_DATA}
`