import { useSelector } from "react-redux"

const Notification = () => {
  const {content, show} = useSelector(state => state.message)
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

export default Notification