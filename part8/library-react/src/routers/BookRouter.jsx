import { AllBooks } from "../Pages/AllBooks";

export const BookRouter = [
    {
        path:'book',
        children:[
            {
                path:'all',
                Component:AllBooks,
            }
        ]
    }
]