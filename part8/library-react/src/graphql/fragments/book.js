import { gql } from "@apollo/client";

export const BOOK_BASIC_DATA = gql`
    fragment BookBasicData on Book {
        author {
            name
        }
        title
        published
        id
    }
`