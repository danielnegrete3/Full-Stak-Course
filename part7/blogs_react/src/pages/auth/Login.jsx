import PropTypes from 'prop-types'
import { login } from '../../services/auth'
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from 'react-router'
import { insertMessage } from '../../features/messages/messageSlice'
import { setAuthUser } from '../../features/auth/authSlice'
import { Button, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    const result = await login({ username:event.target.username.value, password:event.target.password.value })

    if(result.error){
      dispatch(insertMessage({ item:{message:result.error, messageType:'danger' }}))
      return
    }
    
    dispatch(insertMessage({ item:{message:'Loged Correctly', messageType:'success'} }))

    dispatch(setAuthUser({user:result}))

    globalThis.localStorage.setItem('blogsUser', JSON.stringify(result))

    navigate('/blogs/all')
  }

  return(
    <Container>
      <CardTitle as={"h2"}>Log in to application</CardTitle>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <FormLabel>
                    username
          </FormLabel>
          <FormControl
            type="text"
            name="username"
            data-testid='username'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>
                    password
          </FormLabel>
          <FormControl
            type="password"
            name="password"
            data-testid='password'
          />
        </FormGroup>
        
        <Row className='justify-content-end mt-2'>
          <Col >
            <NavLink to={{pathname:"/registrations"}}>Sing up</NavLink>
          </Col>
        </Row>

         <Row className="justify-content-center mt-2">
            <Col xs="auto">
              <Button type="submit" variant='primary'>Login</Button>
            </Col>
          </Row>
      </Form>
    </Container>
  )
}

Login.propTypes = {
  // setUser: PropTypes.func.isRequired,
  // showMessage: PropTypes.func.isRequired
}
export default Login