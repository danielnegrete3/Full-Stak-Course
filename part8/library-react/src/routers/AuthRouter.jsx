import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";


export const AuthRouter = [
    {
        path:'auth',
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