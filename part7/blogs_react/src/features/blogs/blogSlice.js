import {createSlice} from '@reduxjs/toolkit'
import { charge, drop, get, getCurrent, insert, update } from './reducers'

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        array:[],
        current:null,  
    },
    reducers:{
        insertBlog:insert,
        updateBlog:update,
        getBlog:get,
        getCurrentBlog:getCurrent,
        chargeBlogs:charge,
        dropBlog:drop
    }
})

// Action creators are generated for each case reducer function
export const {insertBlog,updateBlog,getBlog,getCurrentBlog,chargeBlogs,dropBlog} = blogSlice.actions

export default blogSlice.reducer