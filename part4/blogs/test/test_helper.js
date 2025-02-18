const {Blog} = require('../models/mongodb/blog')

const initialblogs = [
  {
    "title": "New Blog1",
    "author": "Daniel Aerd",
    "url" : "http/abraham.com"
  },
  {
    "title": "New Blog2",
    "author": "Daniel Aer",
    "url" : "http/simon.com"
  }
]

const newBlog = {
  "title": "Blog by post",
    "author": "Samir",
    "url" : "http/Samir.com"
}

const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const user = {
  username: "daniel",
  name: "Daniel Aeres",
  password : "hel"
}

const users = [user,{
  username: "usuario2",
  name: "Daniel knit",
  password : "holas"
}]

module.exports = {
  initialblogs, nonExistingId, blogsInDb, newBlog, user,users
}
