import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateNewAnecdoteMutation } from "../mutations/anecdotes"
import useMessage from "../hooks/useMessage"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const {sentMessage} = useMessage()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    CreateAnecdoteMutation.mutate(content)
}

const onError = (result) => {
  // console.log(result.response.data.error)
  sentMessage({message:`Error : ${result.response.data.error}`})
}
const onSuccess = (result) => {
  const {content} = result
  sentMessage({message:`New anecdote created : ${content}`})
}

  const CreateAnecdoteMutation = useMutation(CreateNewAnecdoteMutation({queryClient,onError,onSuccess}))


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
