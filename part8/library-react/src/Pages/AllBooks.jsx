import { CardTitle, Col, Container, Row } from "react-bootstrap"
import { useQuery } from "@apollo/client/react"
import { ALL_BOOKS } from "../graphql/queries/book"
import { BookRow } from "../components/BookRow"


export const AllBooks = () => {
    const {loading,data,error} = useQuery(ALL_BOOKS,{fetchPolicy: 'network-only'})

    if (loading) {
        return <div>loading...</div>
    }

    return(
        <Container>
            <CardTitle>All Books</CardTitle>
            <Row>
                <Col xs={6} className=" fs-6 fw-bold">Title</Col>
                <Col xs={4} className=" fs-6 fw-bold">Author</Col>
                <Col xs={2} className=" fs-6 fw-bold">Published</Col>
            </Row>
            {data.allBooks.map((val) => <BookRow book={val}/>)}
        </Container>
    )
}