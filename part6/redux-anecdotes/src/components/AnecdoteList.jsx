import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { sentMessage } from "../reducers/messageReducer"


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
        const anecdote = anecdotes.find((value) => value.id === id)
        dispatch(sentMessage({content:`You voted : '${anecdote.content}'`}))
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