import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdote'

export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createNew = async (content) => {
    const object = { content, votes: 0 }
    console.log(object)
    const response = await axios.post(baseUrl, object)
    return response.data
}



