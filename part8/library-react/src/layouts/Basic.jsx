import { Container } from "react-bootstrap"
import { Outlet } from "react-router"
import { Menu } from "../components/Menu"
import { useQuery } from "@apollo/client/react"
import { ME } from "../graphql/queries/auth"
import { useContext } from "react"
import { AuthContext } from "../context/providers/AuthProvider"

export const Basic = () => {
    const [status,dispatch] = useContext(AuthContext)
    const token = globalThis.localStorage.getItem("library-react")
    const result = useQuery(ME,{fetchPolicy: 'network-only',skip:status.user&&!token&&token==="null"})
    
    if(!status.user && !result.loading && result.data && token && token!="null"){
        dispatch({action:"LOGIN",payload:{token,user:result.data.me}})
    }

    return(
        <Container>
            <Menu/>
            <Outlet/>
        </Container>
    )
}