import { createNew, getAll, updated } from "../services/anecdotes"


const key = 'anecdotes'
export const CreateNewAnecdoteMutation = ({queryClient, onError = () => {},onSuccess = () => {}}) => {
    return {
        mutationFn: createNew,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [key] })
            onSuccess(data)
        },
        onError
    }
}

export const CreateUpdateAnecdotesMutation = (queryClient) => {
    return {
        mutationFn: updated,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [key] })
        }
    }
}

export const CreateQueryAnecdotes = {
    queryKey: [key],
    queryFn: getAll
}