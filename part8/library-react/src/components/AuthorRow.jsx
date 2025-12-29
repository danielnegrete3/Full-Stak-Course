import { Col, Row } from "react-bootstrap"

export const AuthorRow = ({author}) => {

    return(
        <Row>
            <Col xs={8}>{author.name}</Col>
            <Col xs={2}>{author.born}</Col>
            <Col xs={2}>{author.bookCount}</Col>
        </Row>
    )
}