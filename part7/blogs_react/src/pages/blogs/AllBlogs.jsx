import { useDispatch, useSelector } from 'react-redux'
import Blog from '../../components/Blog'
import { insertMessage } from '../../features/messages/messageSlice'
import { dropBlog, updateBlog } from '../../features/blogs/blogSlice'

const AllBlogs = () => {

  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.array)
  const user = useSelector((state) => state.auth.user)

  const showMessage = (item) => dispatch(insertMessage({item}))
  const changeBlog = (item) => dispatch(updateBlog({item}))
  const deleteBlog = (item) => dispatch(dropBlog({item}))

  return(
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} user={user} showMessage={showMessage} deleteBlog={deleteBlog} changeBlogs={changeBlog}/>
      )}
    </div>
  )
}

export default AllBlogs