import Login from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { IsLoggedMiddleware } from "./middlewares/IsLoggedMiddleware";

export const AuthRouter = [
    {
        path:'login',
        Component: Login,
    },
    {
        path:'registrations',
        Component: Register,
        // middleware:[IsLoggedMiddleware],

    },
    
]