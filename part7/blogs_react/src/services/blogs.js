import axios from 'axios'
const baseUrl = `${import.meta.API_URL}/api/blogs`

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async ({ title,url,author,token }) => {
  try{
    const request = await axios.post(baseUrl, { title,url,author },
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

const update = async ({ blog,id,token }) => {
  try{
    const request = await axios.put(`${baseUrl}/${id}`, { ...blog },
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