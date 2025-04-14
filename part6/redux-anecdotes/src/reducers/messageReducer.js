import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content:"",
    show:false
}

const messageSlice = createSlice({

    name:"message",
    initialState,
    reducers: {
        sentMessage : (state,action)=>{
            const {content} = action.payload
            return {...state,content,show:true}
        },
        setShow : (state,action) => {
            const {show} = action.payload
            return {...state, show}
        }
    }
})

export default messageSlice.reducer
export const {sentMessage,setShow} = messageSlice.actions