import {createSlice} from '@reduxjs/toolkit'
import { get, getCurrent, insert, update } from './reducers'

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        array:[],
        current:null,  
    },
    reducers:{
        insertBlog:insert,
        updateBlog:update,
        getBlog:get,
        getCurrentBlog:getCurrent,
    }
})

// Action creators are generated for each case reducer function
export const {insertBlog,updateBlog,getBlog,getCurrentBlog} = blogSlice.actions

export default blogSlice.reducer