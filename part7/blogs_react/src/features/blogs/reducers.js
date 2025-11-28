export const insert = (state,action) =>  {
    return {
        ...state,
        array:[...state.array,action.payload.item]
    }
}

export const update = (state,action) => {
    let newArray = state.array.map((item) => {
        if(item.id === action.payload.item.id)
            return action.payload.item
        return item
    })
    newArray.sort((a,b) => b.likes - a.likes)
    return {
        ...state,
        array:newArray
    }
}

export const drop = (state,action) => {
    let newArray = state.array.filter((item) => 
        item.id !== action.payload.item.id
    )
    
    newArray.sort((a,b) => b.likes - a.likes)
    return {
        ...state,
        array:newArray
    }
}

export const get = (state,action) => {
    if(action.payload.id) return state.array[action.payload.id]
    return state.array
}

export const getCurrent = (state) => {
    return state.array[state.current]
}

export const  charge = (state,action) => {
    let newArray = action.payload.array
    newArray.sort((a,b) => b.likes - a.likes)
    return {
        ...state,
        array:newArray
    }
}