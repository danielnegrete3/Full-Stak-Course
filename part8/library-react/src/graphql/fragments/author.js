import { gql } from "@apollo/client";

export const AUTHOR_ALL_DATA = gql`
    fragment AuthorAllData on Author {
        name,
        bookCount,
        born,
    }
`