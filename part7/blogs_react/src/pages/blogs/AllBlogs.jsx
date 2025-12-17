import { useSelector } from 'react-redux'
import { BlogCard } from '../../components/BlogCard'

const AllBlogs = () => {

  const blogs = useSelector((state) => state.blog.array)

  return(
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map(blog =>
          <BlogCard blog={blog} key={blog.id}/>
        )}
      </ul>
    </div>
  )
}

export default AllBlogs