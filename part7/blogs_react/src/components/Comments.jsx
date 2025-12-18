import { useDispatch, useSelector } from "react-redux"
import commentServices from "../services/comments"
import { updateBlog } from "../features/blogs/blogSlice"
import { useState } from "react"
import { insertMessage } from "../features/messages/messageSlice"

export const Comments = ({blog}) => {

        const dispatch = useDispatch()
        const user = useSelector((state) => state.auth.user)
        const [message,setMessage] = useState("")


        const handleCreateComment = async(event) => {
            event.preventDefault()

            const body = {
                user:user.id,
                blog:blog.id,
                message:message
            }

            const response = await commentServices.create({body,token:user.token})
            if(response.error){
                dispatch(insertMessage({item:{ message:response.error, messageType:'error' }}))
                return
            }

            let newBlog = {...blog}
            newBlog.comments = blog.comments.concat([response])

            dispatch(updateBlog({item:newBlog}))
        }

    return (
        <div>
            <form onSubmit={handleCreateComment}>
                <input type="text" name="comment" value={message} onChange={({ target }) => setMessage(target.value)}/>
                <button>Add Comment</button>
            </form>
            <br />
            <br />
            <div>
                <ul>
                    {blog.comments.map(item => 
                        <li key={item.id}>[{item.user.username}] {item.message}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}