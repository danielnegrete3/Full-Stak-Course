import useField from "../hooks/useField"

const CreateAnecdote = (props) => {
  const {reset: contentReset, ...content} = useField('text')
  const {reset: authorReset, ...author} = useField('text')
  const {reset: infoReset, ...info} = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()

    props.setNotification({message: `You created a new anecdote ${content.value}`})
    props.addNew({
      content:content.value,
      author:author.value,
      info:info.value,
      votes: 0
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    contentReset()
    authorReset()
    infoReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content} />
        </div>
        <div>
          author
          <input name='author' {...author} />
        </div>
        <div>
          url for more info
          <input name='info' {...info} />
        </div>
        <button>create</button>
        <button type="text"  onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

export default CreateAnecdote