import { BlogsLayout } from "../layouts/BlogsLayout";
import AllBlogs from "../pages/blogs/AllBlogs";
import { NewBlog } from "../pages/blogs/NewBlog";
import { ViewBlog } from "../pages/blogs/ViewBlog";
import { AuthNeeded } from "./middlewares/AuthNeeded";
import { LoadBlogs } from "./middlewares/LoadBlogs";

export const BlogsRouter = [
    {
        path:'blogs',
        Component:BlogsLayout,
        loader:AuthNeeded,
        children:[
            {
                path:'all',
                Component: AllBlogs,
                loader:LoadBlogs
            },
            {
                path:'create',
                Component: NewBlog,        
            },
            {
                path:'view/:id',
                Component: ViewBlog,
                loader:LoadBlogs
            },
        ]
    },    
]