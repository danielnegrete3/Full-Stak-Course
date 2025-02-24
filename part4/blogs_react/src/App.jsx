import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Login from './pages/auth/Login'
import AllBlogs from './pages/blogs/AllBlogs'
import Loged from './pages/auth/Loged'
import NewBlog from './pages/blogs/NewBlog'
import BlogMessage from './pages/logs/BlogMessage'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(()=>{
    if(user === null){
        const loggedUserJSON = globalThis.localStorage.getItem('blogsUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }

  })

  const handleLogout = () => {
    setUser(null)
    globalThis.localStorage.removeItem('blogsUser')
  }

  const showMessage = ({message, messageType}) => {

    const newMessage = {
      text:message,
      type:messageType
    }

    setMessage(newMessage)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }
  

  return (
    <div>
      <h2>blogs</h2>
      <br />
      <BlogMessage message={message}/>
      { user === null ?
          <Login setUser={setUser} showMessage={showMessage}/>:
          <div>
            <Loged user={user} handleLogout={handleLogout} showMessage={showMessage}/>
            <br />
            <NewBlog  user={user} blogs={blogs} setBlogs={setBlogs} showMessage={showMessage}/>
            <br />
            <AllBlogs blogs={blogs} showMessage={showMessage}/>
          </div>
      }
    </div>
  )
}

export default App