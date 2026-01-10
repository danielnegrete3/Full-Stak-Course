import { Button, CardTitle, Col, Container, Row } from "react-bootstrap"
import { useQuery, useSubscription } from "@apollo/client/react"
import { ALL_BOOKS_ALL_GENRES } from "../graphql/queries/book"
import { BookRow } from "../components/BookRow"
import { useState } from "react"
import { BOOK_ADDED } from "../graphql/subscriptions/book"


export const AllBooks = () => {
    const [genre,setGenre] = useState("")
    const {loading,data} = useQuery(ALL_BOOKS_ALL_GENRES,{
        fetchPolicy: 'network-only',
        variables:{
            genres:genre.length === 0 ? null:[genre]
        }
    })

    useSubscription(BOOK_ADDED, {
        onData: ({ data }) => {
            // window.alert(data)
            window.alert("Nuevo libro")
            console.log(data)
        },
    })

    if (loading) {
        return <div>loading...</div>
    }
    return(
        <Container>
            <CardTitle>All Books</CardTitle>
            <Row>
                <Col xs={1}>
                    <Button variant="secondary" onClick={()=>setGenre('')}>All</Button>
                </Col>
                {
                    data.allGenres.map((gen) => 
                        <Col xs={gen.length > 7?2:1} key={`gen${gen}`}>
                            <Button variant="secondary" onClick={()=>setGenre(gen)}>{gen}</Button>
                        </Col>
                    )
                }
            </Row>
            <Row>
                <Col xs={6} className=" fs-6 fw-bold">Title</Col>
                <Col xs={4} className=" fs-6 fw-bold">Author</Col>
                <Col xs={2} className=" fs-6 fw-bold">Published</Col>
            </Row>
            {data.allBooks.map((val) => <BookRow book={val} key={val.id}/>)}
        </Container>
    )
}