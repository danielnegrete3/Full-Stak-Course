import {createSlice} from '@reduxjs/toolkit'

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs:[],
        user:{},
        current:null,  
    },
    reducers:{}
})

// Action creators are generated for each case reducer function
export const {} = blogSlice.actions

export default blogSlice.reducer