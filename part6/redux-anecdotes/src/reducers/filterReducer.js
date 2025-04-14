const initialState = ""

export const TypesFilterReducer = {
    setFilter: "SET_FILTER"
}

const reducer = (state = initialState, action) => {
    const {type} = action
    switch(type){
        case TypesFilterReducer.setFilter:{
            const {filter} = action.payload
            return filter
        }
        default:
            return state
    }
}

export default reducer

export const setFilter = ({filter})=>{
    return{
        type:TypesFilterReducer.setFilter,
        payload:{filter}
    }
}