import { useState } from "react"
import blogServices from "../services/blogs"

const Blog = ({ blog, user, showMessage, changeBlogs}) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleShowDetails = () => setShowDetails(!showDetails)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = async () => {

      const newBlog = {...blog,likes:blog.likes+1}

      const response = await blogServices.update({blog:newBlog,id:blog.id,token:user.token})
      if(response.error){
          showMessage({message:response.error, messageType:'error'})
          return
      }
      changeBlogs(response)
  }
    
  return(
    <div style={blogStyle}>
      <p>{blog.title} <button onClick={toggleShowDetails}>{showDetails ? 'hide' : 'view'}</button></p>
      {showDetails &&
        <>
          <p>{blog.url}</p>
          <p>{blog.likes} <button onClick={handleLike}>like</button></p>
          <p>{blog.author}</p>
        </>
      }
      
    </div>  
  )
}

export default Blog