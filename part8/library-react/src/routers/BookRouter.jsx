import { AddBooks } from "../Pages/AddBooks";
import { AllBooks } from "../Pages/AllBooks";

export const BookRouter = [
    {
        path:'book',
        children:[
            {
                path:'all',
                Component:AllBooks,
            },
            {
                path:'add',
                Component:AddBooks
            }
        ]
    }
]