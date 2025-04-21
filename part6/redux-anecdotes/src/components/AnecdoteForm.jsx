import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { sentMessage } from "../reducers/messageReducer"
import { createNew } from "../services/anecdote"


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const submit = async (e) =>{
        e.preventDefault()
        const content = e.target.anecdote.value
        const anecdote = await createNew(content)
        console.log(anecdote)
        dispatch(createAnecdote({anecdote}))
        dispatch(sentMessage({content:`You created : '${anecdote.content}'`}))
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