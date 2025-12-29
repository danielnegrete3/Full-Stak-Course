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
                path:'edit',
                Component:ChangeAuthor,
            }
        ]
    }
]