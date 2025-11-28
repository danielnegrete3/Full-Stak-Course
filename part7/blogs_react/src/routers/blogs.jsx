import { BlogsLayout } from "../layouts/BlogsLayout";
import AllBlogs from "../pages/blogs/AllBlogs";
import { NewBlog } from "../pages/blogs/NewBlog";
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
        ]
    },
    
]