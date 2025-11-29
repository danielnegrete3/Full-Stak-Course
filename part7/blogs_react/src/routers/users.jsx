import { BlogsLayout } from "../layouts/BlogsLayout";
import { AllUsers } from "../pages/users/AllUsers";
import { InfoUser } from "../pages/users/InfoUser";
import { AuthNeeded } from "./middlewares/AuthNeeded";
import { LoadUsers } from "./middlewares/LoadUsers";

export const UsersRouter = [
    {
        path:'users',
        Component:BlogsLayout,
        loader:AuthNeeded,
        children:[
            {
                loader:LoadUsers,
                children:[
                    {
                        path:'all',
                        Component: AllUsers,
                    },
                    {
                        path:':id',
                        Component: InfoUser,        
                    },
                ]
            }
            
        ]
    },    
]