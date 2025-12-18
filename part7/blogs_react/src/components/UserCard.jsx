import { Col, Row } from "react-bootstrap"
import { NavLink } from "react-router"

export const UserCard = ({user,isUser}) => {
    return(
        <Row>
            <Col xs={6}>
                <NavLink to={`/users/${user.id}`}> 
                { isUser && <span>{"(you)\t"}</span>}
                {user.name}: ({user.username})
                </NavLink>
            </Col>
            <Col>
                {user.blogs.length}
            </Col>
        </Row>
    )
}