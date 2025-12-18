import { CardTitle, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import {  Navigate, useParams } from "react-router";

export const InfoUser = ({}) => {
    const { id } = useParams();

    const user = useSelector((state) => state.user.array.find((item) => item.id === id))
    console.log(user)
    if(user === undefined){
        return <Navigate to="/blogs/all" replace />;
    } 

    return(
        <Container>
            <CardTitle as="h2">User {user.name}  ({user.username})</CardTitle>
            <CardTitle as="h4">Added Blogs</CardTitle>
            <Stack>
                {user.blogs.map(item =>
                    <Row className=" fs-6 fw-bold">{item.title}</Row>
                )}
            </Stack>
        </Container>
    )
}