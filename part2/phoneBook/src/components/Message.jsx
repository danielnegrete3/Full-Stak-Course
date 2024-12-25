
const Message = ({ message })=>{
    if(message === null){
        return null;
    }
    return(
        <div className={`message ${message.type}`}>
            {message.text}
        </div>
    )
}

export default Message;