import { useState } from 'react'
import { MockAnecdotes } from './mock/anecdotes'
import Menu from './components/Menu'
import {
  Routes, Route,
  useNavigate,
  useMatch
} from 'react-router-dom'
import Anecdotes from './pages/anecdotes'
import About from './pages/about'
import CreateAnecdote from './pages/CreateAnecdote'
import Footer from './components/Footer'
import Anecdote from './pages/Anecdote'
import Notification from './components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState(MockAnecdotes)
  const navigate  = useNavigate()
  const match = useMatch('/anecdote/:id')
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate('/')
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const sentNotification = ({message}) => {
    setNotification(message)
    setTimeout(()=> setNotification(''),5000)
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />

      <Notification message={notification} />

      <Routes>
        <Route path='/' element={<Anecdotes anecdotes={anecdotes}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<CreateAnecdote addNew={addNew} setNotification={sentNotification}/>}/>
        <Route path='/anecdote/:id' element={<Anecdote anecdote={anecdote} vote={vote} setNotification={sentNotification}/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
