export const insert = (state,action) =>  {
    state.array.push(action.payload.item)
}

export const update = (state,action) => {
    state.array = state.array.map((item) => {
        if(state.current === item.id)
            return action.item
        return item
    })
}

export const get = (state,action) => {
    if(action.id) return state.array[action.id]
    return state.array
}

export const getCurrent = (state) => {
    return state.array[state.current]
}