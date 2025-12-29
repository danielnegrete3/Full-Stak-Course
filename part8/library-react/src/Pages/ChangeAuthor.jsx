import { CardTitle, Container } from "react-bootstrap"
import { AuthorBorn } from "../components/AuthorBorn"

export const ChangeAuthor = () => {

    return(
        <Container>
            <CardTitle as="h2">Edit Author</CardTitle>
            <AuthorBorn/>
        </Container>
    )
}