import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useNavigate } from "react-router"
import { setAuthUser } from "../features/auth/authSlice"

export const BlogsLayout = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const handleLogout = () => {
        globalThis.localStorage.removeItem('blogsUser')
        dispatch(setAuthUser({user:null}))
        navigation('/login')
    }

    return(
        <div>
            <aside>
                {user.name} logged in <button onClick={handleLogout}>logout</button>
            </aside>
            <div style={{gap:'5px',display:'flex'}}>
                <NavLink to={'/blogs/create'} >Nuevo Blog</NavLink>
                <NavLink to={'/blogs/all'}>Blogs</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}