import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer"
import { showMessage } from "../reducers/messageReducer"


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const submit = async (e) =>{
        e.preventDefault()
        const content = e.target.anecdote.value

        dispatch(appendAnecdote(content))
        dispatch(showMessage({content:`You created : '${content}'`}))
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