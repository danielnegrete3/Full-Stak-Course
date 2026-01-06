import { NavLink, useNavigate } from 'react-router'
import { Button, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useApolloClient, useMutation } from '@apollo/client/react';
import { LOGIN } from '../graphql/mutations/auth';
import { ME } from '../graphql/queries/auth';

export const Login = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const [login] = useMutation(LOGIN)


  const handleLogin = async (event) => {
    event.preventDefault()
    
    const result = await login({
      variables:{
        username:event.target.username.value,
        password:event.target.password.value
      }
    })

    globalThis.localStorage.setItem('library-react', result.data.login.value)
    client.resetStore()
    navigate('/')
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
            <NavLink to={{pathname:"/auth/signup"}}>Sing up</NavLink>
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

