
export const Notification = ({content,show,type}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom:"10px"
  }
  if(show){
    return (
      <div style={style}>
        {content}
      </div>
    )
    
  }

}
