import AnecdoteList from "../components/AnecdoteList"

const Anecdotes = ({anecdotes}) => {

    return(
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteList anecdotes={anecdotes}/>
        </div>
    )
}

export default Anecdotes