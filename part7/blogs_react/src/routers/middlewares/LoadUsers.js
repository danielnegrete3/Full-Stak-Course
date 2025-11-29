import { get } from '../../services/users'
import store from '../../store'

export const LoadUsers = async () => {
    const array = await get()
    store.dispatch({type:'user/chargeBlogs',payload:{array}})
}