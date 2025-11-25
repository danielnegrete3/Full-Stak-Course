import {createSlice} from '@reduxjs/toolkit'
import { insert, shift } from './reducers'

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        queue:[],
        time:2000,
    },
    reducers:{
        insertMessage:insert,
        shiftMessage:shift,
    }
})

// Action creators are generated for each case reducer function
export const {insertMessage,shiftMessage} = messageSlice.actions

export default messageSlice.reducer