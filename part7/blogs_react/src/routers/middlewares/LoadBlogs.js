import blogService from '../../services/blogs'
import store from '../../store'

export const LoadBlogs = async () => {
    const blogs = await blogService.getAll()
    store.dispatch({type:'blog/chargeBlogs',payload:{array:blogs}})
}