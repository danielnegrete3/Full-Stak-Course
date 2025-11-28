import PropTypes from 'prop-types'
import { login } from '../../services/auth'
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from 'react-router'
import { insertMessage } from '../../features/messages/messageSlice'
import { setAuthUser } from '../../features/auth/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    const result = await login({ username:event.target.username.value, password:event.target.password.value })

    if(result.error){
      dispatch(insertMessage({ item:{message:result.error, messageType:'error' }}))
      return
    }
    
    dispatch(insertMessage({ item:{message:'Loged Correctly', messageType:'success'} }))

    dispatch(setAuthUser({user:result}))

    globalThis.localStorage.setItem('blogsUser', JSON.stringify(result))

    navigate('/blogs/all')
  }

  return(
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
                    username
          <input
            type="text"
            name="username"
            data-testid='username'
          />
        </div>
        <div>
                    password
          <input
            type="password"
            name="password"
            data-testid='password'
          />
        </div>
        <NavLink to={{pathname:"/registrations"}}>Sing up</NavLink>
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  // setUser: PropTypes.func.isRequired,
  // showMessage: PropTypes.func.isRequired
}
export default Login