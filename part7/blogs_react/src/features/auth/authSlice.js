import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user:null 
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.user = action.payload.user
        },
        getAuthUser:(state) => {
            return state.user
        },
        popAuthUser:(state)=>{
            return state.user
        },
    }
})

// Action creators are generated for each case reducer function
export const {setAuthUser,getAuthUser,popAuthUser} = authSlice.actions

export default authSlice.reducer