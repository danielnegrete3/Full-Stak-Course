import { AllAuthors } from "../Pages/AllAuthors";


export const AuthorRouter = [
    {
        path:'author',
        children:[
            {
                path:'all',
                Component:AllAuthors,
            }
        ]
    }
]