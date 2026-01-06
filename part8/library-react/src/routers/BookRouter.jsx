import { AuthLayout } from "../layouts/AuthLayout";
import { AddBooks } from "../Pages/AddBooks";
import { AllBooks } from "../Pages/AllBooks";
import { Recomendations } from "../Pages/Recomendarions";

export const BookRouter = [
    {
        path:'book',
        children:[
            {
                path:'all',
                Component:AllBooks,
            },
            {
                Component:AuthLayout,
                children:[
                    {
                        path:'add',
                        Component:AddBooks
                    },
                    {
                        path:'recomendations',
                        Component:Recomendations
                    }
                ]
            }
        ]
    }
]