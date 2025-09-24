import Login from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

export const AuthRouter = [
    {
        path:'/login',
        Component: Login,
        // errorElement:()=><div>Error</div>
    },
    {
        path:'/registrations',
        Component: Register,
    },
    
]