import { Button, CardTitle, Col, Container, Row } from "react-bootstrap"
import { useQuery } from "@apollo/client/react"
import { ALL_BOOKS } from "../graphql/queries/book"
import { BookRow } from "../components/BookRow"
import { useContext, useState } from "react"
import { AuthContext } from "../context/providers/AuthProvider"


export const Recomendations = () => {
    const [status] = useContext(AuthContext)

    const {loading,data} = useQuery(ALL_BOOKS,{
        fetchPolicy: 'network-only',
        variables:{
            genres:[status.user.favoriteGenre]
        }
    })

    if (loading) {
        return <div>loading...</div>
    }
    return(
        <Container>
            <CardTitle>Recomendatiosn to {status.user.username}</CardTitle>
            <Container>We know that you love the gender {status.user.favoriteGenre} and these books are us recomendation</Container>
            <Row>
                <Col xs={6} className=" fs-6 fw-bold">Title</Col>
                <Col xs={4} className=" fs-6 fw-bold">Author</Col>
                <Col xs={2} className=" fs-6 fw-bold">Published</Col>
            </Row>
            {data.allBooks.map((val) => <BookRow book={val} key={val.id}/>)}
        </Container>
    )
}