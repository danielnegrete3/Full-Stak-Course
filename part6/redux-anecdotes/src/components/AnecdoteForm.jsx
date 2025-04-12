import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const submit = (e) =>{
        e.preventDefault()

        dispatch(createAnecdote({content:e.target.anecdote.value}))
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