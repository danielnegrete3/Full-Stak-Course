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
  const [showNewBlog, setShowNewBlog] = useState(false)
  
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
  

  const changeNewBlog = (state) => {
    setShowNewBlog(state)
  }

  const changeBlogs = (updateBlog) => {
    const newBlogs = blogs.map(blog => blog.id === updateBlog.id ? updateBlog : blog)
    setBlogs(newBlogs)
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
            {showNewBlog? 
              <NewBlog  user={user} blogs={blogs} setBlogs={setBlogs} showMessage={showMessage} cancelClick={() => changeNewBlog(false)}/>
              :
              <button onClick={() => changeNewBlog(true)}>Create a new Blog</button>
            }
            <br />
            <AllBlogs blogs={blogs} showMessage={showMessage} user={user} changeBlogs={changeBlogs}/>
          </div>
      }
    </div>
  )
}

export default App