import { useState } from 'react'
import blogServices from '../services/blogs'
import PropTypes from 'prop-types'

const Blog = ({ blog, user, showMessage, changeBlogs,deleteBlog, test=false }) => {
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

    if(test){
      test()
      return
    }

    const newBlog = { ...blog,likes:blog.likes+1 }

    const response = await blogServices.update({ blog:newBlog,id:blog.id,token:user.token })
    if(response.error){
      showMessage({ message:response.error, messageType:'error' })
      return
    }
    changeBlogs(response)
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
    deleteBlog(blog)
  }

  return(
    <div style={blogStyle}>
      <p>{blog.title}: {blog.author} <button onClick={toggleShowDetails}>{showDetails ? 'hide' : 'view'}</button></p>
      {showDetails &&
        <>
          <p>{blog.url}</p>
          <p>{blog.likes} <button onClick={handleLike}>like</button></p>
          <p>{user.name}</p>
          <br />
          {
            user.username === blog.user.username &&
            <button onClick={handleDelete}>delete</button>
          }
        </>
      }
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  showMessage: PropTypes.func.isRequired,
  changeBlogs: PropTypes.func.isRequired
}
export default Blog