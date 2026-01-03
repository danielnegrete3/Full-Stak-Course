import { Col, Row } from "react-bootstrap"


export const BookRow = ({book}) => {

    return(
        <Row>
            <Col xs={6} >{book.title}</Col>
            <Col xs={4} >{book.author.name}</Col>
            <Col xs={2} >{book.published}</Col>
        </Row>
    )
}