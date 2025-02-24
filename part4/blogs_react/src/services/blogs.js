import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async ({title,url,token}) => {
  try{
    const request = await axios.post(baseUrl, {title,url},
      {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )
    return request.data
    
  }catch(error){
    return {error:error.response.data.error}
  }
}

export default { getAll, create}