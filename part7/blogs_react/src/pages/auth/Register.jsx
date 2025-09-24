import { useRef } from "react"
import { post } from "../../services/users"

export const Register = () => {
    const username = useRef('')
    const name = useRef('')
    const password = useRef('')
    const confPassword = useRef('')

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
        const response = await post({body})
    }

    return(
        <div>
            <h2>Register a new user</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    username
                    <input name="username" ref={username}/>
                </div>
                <div>
                    name
                    <input name="name" ref={name}/>
                </div>
                <div>
                    password
                    <input name="password" ref={password}/>
                </div>
                <div>
                    confirm password
                    <input name="confPassword" ref={confPassword}/>
                </div>                

                <button type="submit">sign up</button>
            </form>
        </div>
    )
}