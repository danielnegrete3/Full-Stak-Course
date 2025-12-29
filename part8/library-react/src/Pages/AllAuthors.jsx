import { CardTitle, Col, Container, Row } from "react-bootstrap"
import { ALL_AUTHORS } from "../graphql/queries/author"
import { useQuery } from "@apollo/client/react"
import { AuthorRow } from "../components/AuthorRow"


export const AllAuthors = () => {
    const result = useQuery(ALL_AUTHORS,{fetchPolicy: 'network-only'})

    if (result.loading) {
        return <div>loading...</div>
    }

    return(
        <Container>
            <CardTitle>All Authors</CardTitle>
            <Row>
                <Col xs={8} className=" fs-6 fw-bold">Name</Col>
                <Col xs={2} className=" fs-6 fw-bold">Born</Col>
                <Col xs={2} className=" fs-6 fw-bold">N° Books</Col>
            </Row>
            {result.data.allAuthors.map((val) => <AuthorRow author={val}/>)}
        </Container>
    )
}