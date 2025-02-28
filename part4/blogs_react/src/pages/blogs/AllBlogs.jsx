import Blog from "../../components/Blog"

const AllBlogs = ({blogs,user,showMessage,changeBlogs}) => {

    return(
      <div>
        <h2>All Blogs</h2>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} user={user} showMessage={showMessage} changeBlogs={changeBlogs}/>
        )}
      </div>
    )
}

export default AllBlogs