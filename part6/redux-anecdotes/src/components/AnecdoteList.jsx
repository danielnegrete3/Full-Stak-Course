import { useDispatch, useSelector } from "react-redux"
import { addVote, initializeAnecdotes } from "../reducers/anecdoteReducer"
import { showMessage } from "../reducers/messageReducer"
import { useEffect } from "react"


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

    useEffect(() => {
        dispatch(initializeAnecdotes())
      },[])

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(addVote(anecdote))
        dispatch(showMessage({content:`You voted : '${anecdote.content}'`}))
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
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList