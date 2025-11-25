export const insert = (state,action) =>  {
    return {
        ...state,
        queue: [...state.queue, action.payload.item]
    };
}

export const shift = (state) => {
    if(state.queue.lenght < 1) return state
    
    const [__,...newQueue] =state.queue
    return {
        ...state,
        queue: newQueue
    };
}