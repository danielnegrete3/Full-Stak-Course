import { useRef } from "react"
import { NavLink, useNavigate } from "react-router"
import { Button, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"

export const Signup = () => {
    const username = useRef('')
    const genre = useRef('')

    const navigate = useNavigate();

    const handleSubmit = async (event)=> {
        event.preventDefault()

        const body = {
            username:username.current.value,
            genre:genre.current.value,
        }

        navigate('/auth/login')
    }

    return(
        <Container>
            <CardTitle as={"h2"}>Register a new user</CardTitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>
                        username
                    </FormLabel>
                    <FormControl name="username" ref={username}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>
                        Favorite Genre
                    </FormLabel>
                    <FormControl name="genre" ref={genre}/>
                </FormGroup>   

                <Row className='justify-content-end mt-2'>
                    <Col >
                        <NavLink to={{pathname:"/auth/login"}}>Sing in</NavLink>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                    <Col xs="auto">
                        <Button type="submit" variant='primary'>Sign up</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}