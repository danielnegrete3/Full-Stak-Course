import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer  from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import messageReducer from './reducers/messageReducer'

export const reducers = {
    anecdotes:anecdoteReducer,
    filter:filterReducer,
    message:messageReducer
}


export const store = configureStore({
    reducer:reducers
})