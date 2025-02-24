

const BlogMessage = ({message}) => {

    if(message === null){
        return
    }

    const colors = {
        error: 'red',
        success: 'green'
    }
    
    return(
        <div style={{color:colors[message.type], backgroundColor:'lightgrey', fontSize:20, borderStyle:'solid', borderRadius:5, padding:10, marginBottom:10}}>
            <p>{message.text}</p>
        </div>
    )
}

export default BlogMessage;