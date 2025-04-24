import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { CreateQueryAnecdotes, CreateUpdateAnecdotesMutation } from './mutations/anecdotes'
import useMessage from './hooks/useMessage'

const App = () => {
  const queryClient = useQueryClient()

  const CreateAnecdoteMutation = useMutation(CreateUpdateAnecdotesMutation(queryClient))

  const { sentMessage } = useMessage()

  const handleVote = (anecdote) => {
    CreateAnecdoteMutation.mutate({...anecdote,votes:anecdote.votes+1})
    sentMessage({message: `You voted by : ${anecdote.content}`})
  }

  const result = useQuery(CreateQueryAnecdotes)

  // console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
