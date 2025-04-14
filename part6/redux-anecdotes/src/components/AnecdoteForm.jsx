import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { sentMessage } from "../reducers/messageReducer"


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const submit = (e) =>{
        e.preventDefault()
        const content = e.target.anecdote.value
        dispatch(createAnecdote({content}))
        dispatch(sentMessage({content:`You created : '${content}'`}))
        e.target.anecdote.value = ""
    }
    return(
        <>
            <h2>create new</h2>
            <form onSubmit={submit}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm