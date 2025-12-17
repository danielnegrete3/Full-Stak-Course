import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/comments`

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async ({ body,token }) => {
  try{
    const request = await axios.post(baseUrl, body,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return request.data

  }catch(error){
    return { error:error.response.data.error }
  }
}

const update = async ({ body,id,token }) => {
  try{
    const request = await axios.put(`${baseUrl}/${id}`, body,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return request.data

  }catch(error){
    return { error:error.response.data.error }
  }
}

const drop = async ({ id,token }) => {
  try{
    const request = await axios.delete(`${baseUrl}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return request.data

  }catch(error){
    return { error:error.response.data.error }
  }
}

export default { getAll, create,update ,drop }