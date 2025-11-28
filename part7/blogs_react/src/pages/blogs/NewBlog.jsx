import { useState } from 'react'
import blogServices from '../../services/blogs'
import { insertBlog } from '../../features/blogs/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { insertMessage } from '../../features/messages/messageSlice'

export const NewBlog = ({}) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)


  const cancelClick = () => {
    navigate('blogs/all')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const blog = {
      title,
      url,
      author
    }

    const response = await blogServices.create({ ...blog,token:user.token })
    if(response.error){
      dispatch(insertMessage({item:{ message:response.error, messageType:'error' }}))
      return
    }

    dispatch(insertBlog({item:response}))

    clearForm()
    dispatch(insertMessage({item:{message:`New Blog created ${response.title}`, messageType:'success'}}))
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