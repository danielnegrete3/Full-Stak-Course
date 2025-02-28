import PropTypes from 'prop-types'
import Blog from '../../components/Blog'

const AllBlogs = ({ blogs,user,showMessage,changeBlogs }) => {

  return(
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} user={user} showMessage={showMessage} changeBlogs={changeBlogs}/>
      )}
    </div>
  )
}

AllBlogs.propTypes = {
  blogs:PropTypes.array.isRequired,
  user:PropTypes.object.isRequired,
  showMessage:PropTypes.func.isRequired,
  changeBlogs:PropTypes.func.isRequired
}

export default AllBlogs