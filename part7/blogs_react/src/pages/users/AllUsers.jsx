import { useSelector } from "react-redux"
import { UserCard } from "../../components/UserCard"
import { CardTitle, Col, Container, Row } from "react-bootstrap"


export const AllUsers = () => {
    const user = useSelector((state) => state.auth.user)
    const users = useSelector((state) => state.user.array)
    console.log("mi id \t", user.id)
    return (
        <Container>
            <CardTitle as={"h2"}>All Users</CardTitle>
            <Container>
                <Row>
                    <Col className=" fs-5 fw-bold" xs={6}>
                        User
                    </Col>
                    <Col className=" fs-5 fw-bold">
                        N° Blogs
                    </Col>
                </Row>
                    {users.map(item =>
                        <UserCard key={item.id} user={item} isUser={user.id == item.id}/>
                    )}
            </Container>
        </Container>
    )
}