import { Link } from "react-router-dom"

const AnecdoteList = ({ anecdotes }) => (
    
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} ><Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link></li>)}
    </ul>

)

export default AnecdoteList