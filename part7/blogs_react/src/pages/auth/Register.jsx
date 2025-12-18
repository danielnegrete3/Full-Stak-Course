import { useRef } from "react"
import { post } from "../../services/users"
import { NavLink, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { insertMessage } from "../../features/messages/messageSlice"
import { Button, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"

export const Register = () => {
    const username = useRef('')
    const name = useRef('')
    const password = useRef('')
    const confPassword = useRef('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = async (event)=> {
        event.preventDefault()
        if(password.current.value !== confPassword.current.value){
            return
        }
        const body = {
            username:username.current.value,
            name:name.current.value,
            password:password.current.value,
        }
        const result = await post({body})
        if(result.error){
            console.log('entro aca ')
            dispatch(insertMessage({ item:{message:result.error, messageType:'danger' }}))
            return
        }

        navigate('/login')
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
                        name
                    </FormLabel>
                    <FormControl name="name" ref={name}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>
                        password
                    </FormLabel>
                    <FormControl name="password" ref={password}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>
                        confirm password
                    </FormLabel>
                    <FormControl name="confPassword" ref={confPassword}/>
                </FormGroup>                

                <Row className='justify-content-end mt-2'>
                    <Col >
                        <NavLink to={{pathname:"/login"}}>Sing in</NavLink>
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