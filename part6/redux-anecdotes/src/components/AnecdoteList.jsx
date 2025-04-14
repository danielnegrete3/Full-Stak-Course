import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteList = () => {

    const anecdotes = useSelector(state => {
        const {filter,anecdotes} = state
        if(filter === ""){
            return anecdotes
        }
        
        return anecdotes.filter((anecdote) => {
            return new RegExp(`${filter}`, "i").test(anecdote.content)
        })
    })
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote({id}))
    }

    return(
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList