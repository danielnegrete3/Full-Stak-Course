import { createContext, useReducer } from "react";
import { InitialMessageState, MessageReducer } from "../reducers/MessageReducer";

export const MessageContext = createContext()

export const MessageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MessageReducer,InitialMessageState)

    const sentMessage = ({message}) => {
        dispatch({type : "SENT_MESSAGE", payload : {message}})
        activeTimer()
    }

    const activeTimer = () => {
        dispatch({type : "SENT_SHOW", payload : {show:true}})
        setTimeout( () => dispatch({type : "SENT_SHOW", payload : {show:false}}),state.time)
    }

    return (
        <MessageContext.Provider value={{sentMessage,state}}>
            {children}
        </MessageContext.Provider>
    )
}