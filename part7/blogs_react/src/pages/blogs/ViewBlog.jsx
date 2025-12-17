import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { dropBlog, updateBlog } from "../../features/blogs/blogSlice";
import blogServices from "../../services/blogs"

export const ViewBlog = () => {

    const { id } = useParams()
    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const blog = useSelector((state) => state.blog.array.find((val)=> val.id === id))
    if(!blog) return <Navigate to="/blogs/all" replace />

     const handleLike = async () => {
    
        const newBlog = { ...blog,likes:blog.likes+1 }
    
        const response = await blogServices.update({ blog:newBlog,id:blog.id,token:user.token })
        if(response.error){
          showMessage({ message:response.error, messageType:'error' })
          return
        }
        dispatch(updateBlog({item:response}))
      }

      const handleDelete = async () => {
          const res = window.confirm(`Delete ${blog.title} by ${blog.author}`)
      
          if(!res) return
      
          const response = await blogServices.drop({ id:blog.id,token:user.token })
          if(response.error){
            showMessage({ message:response.error, messageType:'error' })
            return
          }
          response.drop = true
          dispatch(dropBlog({item:blog}))
          navigate("/blogs/all")
        }

    return (
        <div>
            <h2>{blog.title}</h2>
            <h3>Author:{blog.author}</h3>
            <a href={blog.url}>{blog.url}</a> 
            <p>
                Likes : {blog.likes} <button onClick={handleLike}>like</button>
            </p>
            <br />
          {
            user.username === blog.user.username &&
            <button onClick={handleDelete}>delete</button>
          }
        </div>
    )
}