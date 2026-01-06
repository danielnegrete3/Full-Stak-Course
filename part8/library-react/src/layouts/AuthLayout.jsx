import { useContext } from "react"
import { Outlet, useNavigate } from "react-router"
import { AuthContext } from "../context/providers/AuthProvider"
import { ME } from "../graphql/queries/auth"
import { useQuery } from "@apollo/client/react"

export const AuthLayout = () => {
    const [status,dispatch] = useContext(AuthContext)
    const navigate = useNavigate()
    const token = globalThis.localStorage.getItem("library-react")
    const result = useQuery(ME,{fetchPolicy: 'network-only',skip:status.user&&!token&&token==="null"})
    
    if(!status.user && !result.loading ){
        if(token || token==="null" || !result.data){
            if (window.history.length > 1) {
            navigate(-1);
            } else {
            navigate("/");
            }
        }
        else dispatch({action:"LOGIN",payload:{token,user:result.data.me}})
    }

    return(
    <>
        <Outlet></Outlet>
    </>
    )
}