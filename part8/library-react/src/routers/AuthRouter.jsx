import { redirect } from "react-router";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";


export const AuthRouter = [
    {
        path:'auth',
        loader:() => {
            const token = globalThis.localStorage.getItem('library-react')
            if(token && token != 'null') return redirect("/")
        },
        children:[
            {
                path:'login',
                Component:Login,
            },
            {
                path:'signup',
                Component:Signup
            }
        ]
    }
]