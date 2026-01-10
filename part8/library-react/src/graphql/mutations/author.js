import { gql } from '@apollo/client'
import { AUTHOR_ALL_DATA } from '../fragments/author'

export const EDIT_AUTHOR = gql`
    mutation EditAuthor($name: String!, $born: Int!)
    {
        editAuthor(name: $name, born: $born)
        {
            ...AuthorAllData
        }
    }
    ${AUTHOR_ALL_DATA}
`