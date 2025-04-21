import { createSlice } from "@reduxjs/toolkit"
import { createNew, getAll, updated } from "../services/anecdote"

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []

export const TypesAnecdoteReducers = {
    vote : "VOTE",
    create: "CREATE"
}

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState,
  reducers: {
    createAnecdote: (state,action) =>{
      state.push(action.payload.anecdote)
    },

    voteAnecdote: (state,action) => {
      return (state.map((anecdote) => action.payload.id === anecdote.id? {...anecdote,votes:anecdote.votes+1}:anecdote)).sort((a,b)=> b.votes-a.votes)
    },

    setAnecdotes: (state,action) =>{
      return action.payload.anecdotes
    },


  }
})

export const {createAnecdote,voteAnecdote,setAnecdotes} =  anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async dispatch => {
    const toSort = await getAll()
    const anecdotes = toSort.sort((a,b)=> b.votes-a.votes)
    dispatch(setAnecdotes({anecdotes}))
  }
}

export const appendAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await createNew(content)
    dispatch(createAnecdote({anecdote:newAnecdote}))
  }
}

export const addVote = anecdote => {
  return async dispatch => {
    const newAnecdote = {
      ...anecdote,
      votes: anecdote.votes+1
    }
    const response = await updated(newAnecdote)
    dispatch(voteAnecdote({id:response.id}))
  }
}