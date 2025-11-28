import { redirect } from "react-router"
import store from "../../store"

export const NeedNotLoged = () => {
    if(store.getState().auth.user)
        return redirect('/blogs/all')
}