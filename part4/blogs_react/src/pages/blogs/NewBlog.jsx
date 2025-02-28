import { useState } from 'react'
import blogServices from '../../services/blogs'

const NewBlog = ({user,blogs,setBlogs,showMessage,cancelClick=()=>{}}) => {
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

        const response = await blogServices.create({...blog,token:user.token})
        if(response.error){
            showMessage({message:response.error, messageType:'error'})
            return
        }

        const newBlogs = blogs.concat(response)
        setBlogs(newBlogs)

        clearForm()
        showMessage({message:`New Blog created ${response.title}`, messageType:'success'})
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
                        onChange={({target}) => setTitle(target.value)}
                    />
                </div>
                <div>
                    url
                    <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={({target}) => setUrl(target.value)}
                    />
                </div>
                <div>
                    author
                    <input
                        type="text"
                        name="url"
                        value={author}
                        onChange={({target}) => setAuthor(target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
            <button onClick={cancelClick}>Cancel</button>
        </div>
    )
}

export default NewBlog