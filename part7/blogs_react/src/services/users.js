import axios from 'axios'

const url = `${import.meta.env.VITE_API_URL}/api/users`

export const get = async () => {
  try{
    const response = await axios.get(`${url}`)
    return response.data

  }catch(error){
    return { error:error.response.data.error }
  }
}

export const post = async ({body}) => {
  try{
    const response = await axios.post(`${url}`,body)
    return response

  }catch(error){
    return { error:error.response.data.error }
  }
}