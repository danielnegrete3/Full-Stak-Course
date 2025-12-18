import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { dropBlog, updateBlog } from "../../features/blogs/blogSlice";
import blogServices from "../../services/blogs"
import { Comments } from "../../components/Comments";
import { insertMessage } from "../../features/messages/messageSlice";
import { Button, CardLink, CardText, CardTitle, Container } from "react-bootstrap";

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
          dispatch(insertMessage({item:{ message:response.error, messageType:'danger' }}))
          return
        }

        dispatch(updateBlog({item:response}))
      }

      const handleDelete = async () => {
          const res = window.confirm(`Delete ${blog.title} by ${blog.author}`)
      
          if(!res) return
      
          const response = await blogServices.drop({ id:blog.id,token:user.token })
          if(response.error){
            dispatch(insertMessage({item:{ message:response.error, messageType:'danger' }}))
            return
          }
          response.drop = true
          dispatch(dropBlog({item:blog}))
          navigate("/blogs/all")
        }

    return (
        <Container>
            <CardTitle as="h2">{blog.title}</CardTitle>
            <CardTitle as="h3">Author:{blog.author}</CardTitle>
            <CardLink href={blog.url}>{blog.url}</CardLink> 
            <CardText>
                Likes : {blog.likes} <Button variant="outline-primary" size="sm" onClick={handleLike}>like</Button>
            </CardText>
            <br />
          {
            user.username === blog.user.username &&
            <Button variant="danger" onClick={handleDelete}>delete</Button>
          }
            <br />
            <br />
          <Comments blog={blog}/>
        </Container>
    )
}