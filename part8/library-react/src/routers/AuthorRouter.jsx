import { AuthLayout } from "../layouts/AuthLayout";
import { AllAuthors } from "../Pages/AllAuthors";
import { ChangeAuthor } from "../Pages/ChangeAuthor";


export const AuthorRouter = [
    {
        path:'author',
        children:[
            {
                path:'all',
                Component:AllAuthors,
            },
            {
                Component:AuthLayout,
                children:[
                    {
                        path:'edit',
                        Component:ChangeAuthor,
                    }
                ]
            }
        ]
    }
]