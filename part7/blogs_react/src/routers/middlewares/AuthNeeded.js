import { redirect } from "react-router"
import store from "../../store"

export const AuthNeeded = () => {
    if(store.getState().auth.user) return
    return redirect('/login')
}