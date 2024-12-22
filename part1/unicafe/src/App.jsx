
import { useState } from 'react'

const initComents = {
  good : 0,
  neutral : 0,
  bad : 0
}

const puntage ={
  good: 1,
  neutral: 0,
  bad: -1
}

const Header = ({children}) => <h1>{children}</h1>
const Button = ({onClick, children}) => <button onClick={onClick}>{children}</button>
const Content = ({children, type}) => <p>{type}: {children}</p>
const Statistics = ({comments}) => {
  const Average = (comments) =>{
    const total = Object.entries(comments).reduce((acc, [key, value]) => acc + (puntage[key] * value), 0);
    return total / Object.keys(comments).length;
  }
  const Positive = (comments) => {
    let total = Object.entries(comments).reduce((acc, [key, value]) => acc + value, 0);
    return total === 0 ? 0:comments.good / total;
  }

  return(
    <>
      <Header>statistics</Header>
      <Content type="Good">{comments.good}</Content>
      <Content type="Neutral">{comments.neutral}</Content>
      <Content type="Bad">{comments.bad}</Content>
      <Content type="Average">{Average(comments)}</Content>
      <Content type="Positive">{Positive(comments)}%</Content>
    </>
  )
}

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
      <Statistics comments={comments}/>

    </div>
  )
}

export default App