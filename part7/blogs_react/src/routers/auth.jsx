import Login from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { NeedNotLoged } from "./middlewares/NeedNotLoged";

export const AuthRouter = [
    {
        loader:NeedNotLoged,
        children:[
            {
                path:'login',
                Component: Login,
            },
            {
                path:'registrations',
                Component: Register,        
            },
        ],
    }
    
]