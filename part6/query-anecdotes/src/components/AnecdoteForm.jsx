import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateNewAnecdoteMutation } from "../mutations/anecdotes"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()

  const CreateAnecdoteMutation = useMutation(CreateNewAnecdoteMutation(queryClient))

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    CreateAnecdoteMutation.mutate(content)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
