import { useState } from 'react'
import blogServices from '../../services/blogs'
import { insertBlog } from '../../features/blogs/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { insertMessage } from '../../features/messages/messageSlice'
import { Button, CardTitle, CloseButton, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

export const NewBlog = ({}) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)


  const cancelClick = () => {
    navigate('/blogs/all')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const blog = {
      title,
      url,
      author
    }

    const response = await blogServices.create({ ...blog,token:user.token })
    if(response.error){
      dispatch(insertMessage({item:{ message:response.error, messageType:'danger' }}))
      return
    }

    dispatch(insertBlog({item:response}))

    clearForm()
    dispatch(insertMessage({item:{message:`New Blog created ${response.title}`, messageType:'success'}}))
  }

  const clearForm = () => {
    setTitle('')
    setUrl('')
    setAuthor('')
  }

  return (
    <Container>
      <CardTitle as="h2">New Blog</CardTitle>

      <Row className="justify-content-end">
        <Col xs="auto">
          <CloseButton onClick={cancelClick}/>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        
        <FormGroup>
            <FormLabel>
              Title 
            </FormLabel>
              <FormControl
                type="text"
                name="title"
                value={title}
                placeholder='title'
                onChange={({ target }) => setTitle(target.value)}
              />
        </FormGroup>

        <FormGroup>
            <FormLabel>
              url
            </FormLabel>
              <FormControl
                type="text"
                name="url"
                value={url}
                placeholder='url'
                onChange={({ target }) => setUrl(target.value)}
              />
        </FormGroup>

        <FormGroup>
            <FormLabel>
              author
            </FormLabel>
              <FormControl
                type="text"
                name="author"
                value={author}
                placeholder='author'
                onChange={({ target }) => setAuthor(target.value)}
              />
        </FormGroup>            
                     
        <Row className="justify-content-center mt-2">
          <Col xs="auto">
            <Button type="submit" variant='primary'>Create</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}