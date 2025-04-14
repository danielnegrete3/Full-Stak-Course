import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

export const TypesFilterReducer = {
    setFilter: "SET_FILTER"
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilter: (state,action) =>{
            const {filter} = action.payload
            return filter
        }
    }
})

export default filterSlice.reducer
export const {setFilter} = filterSlice.actions