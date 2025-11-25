import { MessageLayout } from "../layouts/MessageLayout";
import { AuthRouter } from "./auth";

export const MapRouters = [
    // Blogs

    {
        path:'',
        Component:MessageLayout,
        children:[
            ...AuthRouter,    

        ]
    }
    
]