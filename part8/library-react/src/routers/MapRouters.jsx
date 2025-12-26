import { Basic } from "../layouts/Basic";
import { AuthorRouter } from "./AuthorRouter";
import { BookRouter } from "./BookRouter";


export const MapRouters = [
    {
       path:'',
       Component:Basic,
       children:[
            ...BookRouter,
            ...AuthorRouter,
       ]
    }
]