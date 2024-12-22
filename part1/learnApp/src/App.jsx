import { useState } from 'react'
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <h1>Greetings</h1>

      <Hello />
      <p>{counter}</p>
    </div>
  )
}

export default App
