import { BlogsLayout } from "../layouts/BlogsLayout";
import AllBlogs from "../pages/blogs/AllBlogs";
import { NewBlog } from "../pages/blogs/NewBlog";
import { LoadBlogs } from "./middlewares/LoadBlogs";

export const BlogsRouter = [
    {
        path:'blogs',
        Component:BlogsLayout,
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