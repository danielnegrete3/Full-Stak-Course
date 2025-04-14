import { useDispatch, useSelector } from "react-redux"
import { setShow } from "../reducers/messageReducer"

const Notification = () => {
  const {content, show} = useSelector(state => state.message)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom:"10px"
  }
  if(show){
    setTimeout(() => {
      dispatch(setShow({show:false}))
    }, 5000);
    
    return (
      <div style={style}>
        {content}
      </div>
    )
    
  }

}

export default Notification