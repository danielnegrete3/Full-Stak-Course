export const InitialMessageState = {
    message:"",
    show:false,
    time:5000
}

export const MessageReducer = (state,action) => {
    switch(action.type){
        case "SENT_MESSAGE":
            return{...state,message:action.payload.message}
        case "SENT_TIME":
            return{...state,time:action.payload.time}
        case "SENT_SHOW":
            return{...state,show:action.payload.show}
        default:
            return state
    }
}
