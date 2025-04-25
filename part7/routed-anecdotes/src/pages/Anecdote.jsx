
const Anecdote = ({anecdote,vote,setNotification}) => {
    const handleVote = () => {
        setNotification({message: `You voted for ${anecdote.content}`})
        vote(anecdote.id)
    }
    return(
        <div>
            <h2>Anecdote of {anecdote.author}</h2>
            <p>
                {anecdote.content}
                <br />
                Info: <a href={anecdote.info}>{anecdote.info}</a>
            </p>
            <aside>Votes:{anecdote.votes} : <button onClick={handleVote}>Vote for it</button></aside>
        </div>
    )
}

export default Anecdote