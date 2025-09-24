import { useState } from 'react'
import blogServices from '../../services/blogs'
import PropTypes from 'prop-types'

const NewBlog = ({ user,insertNewBlog,showMessage,cancelClick=() => {}, test=false }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const blog = {
      title,
      url,
      author
    }

    if(test){
      insertNewBlog(blog)
      return
    }

    const response = await blogServices.create({ ...blog,token:user.token })
    if(response.error){
      showMessage({ message:response.error, messageType:'error' })
      return
    }

    insertNewBlog(response)

    clearForm()
    showMessage({ message:`New Blog created ${response.title}`, messageType:'success' })
    cancelClick()
  }

  const clearForm = () => {
    setTitle('')
    setUrl('')
    setAuthor('')
  }

  return (
    <div>
      <h3>New Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
                    title
          <input
            type="text"
            name="title"
            value={title}
            placeholder='title'
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
                    url
          <input
            type="text"
            name="url"
            value={url}
            placeholder='url'
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div>
                    author
          <input
            type="text"
            name="author"
            value={author}
            placeholder='author'
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <button onClick={cancelClick}>Cancel</button>
    </div>
  )
}

NewBlog.propTypes = {
  user: PropTypes.object.isRequired,
  insertNewBlog: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  cancelClick: PropTypes.func
}

export default NewBlog