import { AuthRouter } from "./auth";

export const MapRouters = [
    // Blogs

    {
        path:'',
        children:[
            ...AuthRouter,    

        ]
    }
    
]