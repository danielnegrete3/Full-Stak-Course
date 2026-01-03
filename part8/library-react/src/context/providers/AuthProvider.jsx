import { createContext } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const reducer = AuthReducer()
    return(
        <AuthContext.Provider value={reducer}>
            {children}
        </AuthContext.Provider>
    )
}