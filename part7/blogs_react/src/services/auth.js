import axios from 'axios'

const url = `${import.meta.env.VITE_API_URL}/api/auth`

export const login = async ({ username,password }) => {
  try{
    const response = await axios.post(`${url}/login`, { username,password })
    return response.data

  }catch(error){
    return { error:error.response.data.error }
  }
}