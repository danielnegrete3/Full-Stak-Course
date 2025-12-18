import { useSelector } from 'react-redux'
import { BlogCard } from '../../components/BlogCard'
import { CardTitle, Container, Stack } from 'react-bootstrap'

const AllBlogs = () => {

  const blogs = useSelector((state) => state.blog.array)

  return(
    <Container>
      <CardTitle>All Blogs</CardTitle>
      <Stack>
        {blogs.map(blog =>
          <BlogCard blog={blog} key={blog.id}/>
        )}
      </Stack>
    </Container>
  )
}

export default AllBlogs