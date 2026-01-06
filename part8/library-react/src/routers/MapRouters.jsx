import { redirect } from "react-router";
import { Basic } from "../layouts/Basic";
import { AuthorRouter } from "./AuthorRouter";
import { AuthRouter } from "./AuthRouter";
import { BookRouter } from "./BookRouter";


export const MapRouters = [
    {
       path:'',
       Component:Basic,
       children:[
            ...BookRouter,
            ...AuthorRouter,
            ...AuthRouter,
       ]
    },
    {
        path:'*',
        loader:() => redirect("/")
    }
]