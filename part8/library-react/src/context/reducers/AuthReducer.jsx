import { useReducer } from "react";

const InitState = {
    token : null,
    user : null
}

const Functions = (state,args) => {
    const {action} = args
    if(action === "LOGIN"){
        const {payload} = args
        return {...state,token:payload.token,user:payload.user}
    }
    if(action === "LOGOUT"){
        return {...state,token:null,user:null}
    }
}

export const AuthReducer = () => useReducer(Functions,InitState)