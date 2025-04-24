import { createNew, getAll, updated } from "../services/anecdotes"


const key = 'anecdotes'
export const CreateNewAnecdoteMutation = (queryClient) => {
    return {
        mutationFn: createNew,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [key] })
        }
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