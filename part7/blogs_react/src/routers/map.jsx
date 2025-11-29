import { MessageLayout } from "../layouts/MessageLayout";
import { AuthRouter } from "./auth";
import { BlogsRouter } from "./blogs";
import { IsLoggedMiddleware } from "./middlewares/IsLoggedMiddleware";
import { UsersRouter } from "./users";

export const MapRouters = [
    // Blogs

    {
        path:'',
        Component:MessageLayout,
        loader:IsLoggedMiddleware,
        children:[
            ...AuthRouter,    
            ...BlogsRouter,
            ...UsersRouter,
        ]
    }
    
]