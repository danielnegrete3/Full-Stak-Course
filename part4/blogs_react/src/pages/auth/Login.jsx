import PropTypes from 'prop-types'
import { login } from '../../services/auth'

const Login = ({ setUser,showMessage }) => {

  const handleLogin = async (event) => {
    event.preventDefault()
    const result = await login({ username:event.target.username.value, password:event.target.password.value })

    if(result.error){
      showMessage({ message:result.error, messageType:'error' })
      return
    }
    showMessage({ message:'Loged Correctly', messageType:'success' })
    setUser(result)
    globalThis.localStorage.setItem('blogsUser', JSON.stringify(result))
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
          />
        </div>
        <div>
                    password
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired
}
export default Login