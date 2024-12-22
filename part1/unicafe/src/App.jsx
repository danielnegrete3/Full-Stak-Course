
import { useState } from 'react'

const initComents = {
  good : 0,
  neutral : 0,
  bad : 0
}

const Header = ({children}) => <h1>{children}</h1>
const Button = ({onClick, children}) => <button onClick={onClick}>{children}</button>
const Content = ({children}) => <p>{children}</p>

const App = () => {
  const [comments, setComments] = useState(initComents)

  const handleGood = () => {
    setComments({...comments, good: comments.good + 1})
  }

  const handleNeutral = () => {
    setComments({...comments, neutral: comments.neutral + 1})
  }

  const handleBad = () => {
    setComments({...comments, bad: comments.bad + 1})
  }

  return (
    <div>
      <Header>give feedback</Header>
      <Button onClick={handleGood}>good</Button>
      <Button onClick={handleNeutral}>neutral</Button>
      <Button onClick={handleBad}>bad</Button>
      <Header>statistics</Header>
      <Content>good {comments.good}</Content>
      <Content>neutral {comments.neutral}</Content>
      <Content>bad {comments.bad}</Content>
    </div>
  )
}

export default App