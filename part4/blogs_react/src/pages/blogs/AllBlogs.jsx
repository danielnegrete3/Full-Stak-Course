import Blog from "../../components/Blog"

const AllBlogs = ({blogs}) => {

    return(
      <div>
        <h2>Crear</h2>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
}

export default AllBlogs