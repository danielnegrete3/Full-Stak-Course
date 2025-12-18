import { useDispatch, useSelector } from "react-redux"
import commentServices from "../services/comments"
import { updateBlog } from "../features/blogs/blogSlice"
import { useState } from "react"
import { insertMessage } from "../features/messages/messageSlice"
import { Button, Col, Container, FormControl, FormGroup, Row } from "react-bootstrap"
import { Form } from "react-router"

export const Comments = ({blog}) => {

        const dispatch = useDispatch()
        const user = useSelector((state) => state.auth.user)
        const [message,setMessage] = useState("")


        const handleCreateComment = async(event) => {
            event.preventDefault()

            const body = {
                user:user.id,
                blog:blog.id,
                message:message
            }

            const response = await commentServices.create({body,token:user.token})
            if(response.error){
                dispatch(insertMessage({item:{ message:response.error, messageType:'danger' }}))
                return
            }

            let newBlog = {...blog}
            newBlog.comments = blog.comments.concat([response])

            dispatch(updateBlog({item:newBlog}))
        }

    return (
        <Container>
            <Form onSubmit={handleCreateComment}>
                <FormGroup as={Row}>
                    <Col xs={6}>
                        <FormControl type="text" name="comment" value={message} onChange={({ target }) => setMessage(target.value)}/>
                    </Col>
                    <Col>
                        <Button type="submit" variant='secondary' size="sm">Add Comment</Button>
                    </Col>
                </FormGroup>
            </Form>

            <Container className=" mt-10 ">
                {blog.comments.map(item => 
                    <Row key={item.id}>[{item.user.username}] {item.message}</Row>
                )}
            </Container>
        </Container>
    )
}