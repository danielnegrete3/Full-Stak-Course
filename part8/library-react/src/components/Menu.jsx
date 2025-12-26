import { Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router"

export const Menu = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <NavLink to={'/author/all'}>Authors</NavLink>
                </Col>
                <Col>
                    <NavLink to={'/book/all'}>Books</NavLink>
                </Col>
            </Row>
        </Container>
    )
}