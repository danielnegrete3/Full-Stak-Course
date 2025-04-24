import useMessage from "../hooks/useMessage"

const Notification = () => {
  const {state} = useMessage()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!state.show) return null

  return (
    <div style={style}>
      {state.message}
    </div>
  )
}

export default Notification
