import { useState } from "react"
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { CREATE_BOOK } from "../graphql/mutations/book"
import { useMutation } from '@apollo/client/react'

export const NewBook = () => {

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [published,setPublished] = useState('')
    const [genre,setGenre] = useState('')
    const [genres,setGenres] = useState([])

    const [createBook] = useMutation(CREATE_BOOK)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const result = createBook({
            variables:{title,author,published:Number(published),genres}
        })

        clean()
    }
    const clean = () => {
        setTitle('')
        setAuthor('')
        setPublished('')
        setGenre('')
        setGenres([])
    }

    const addGenre = () => {
        setGenres([
            ...genres,
            genre
        ])
        setGenre('')
    }

    const deleteGenre = () => {
        setGenres(genres.filter((val,indx)=>indx != genres.length - 1))
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Title</FormLabel>
                <FormControl 
                type="text"
                name="title"
                value={title}
                placeholder=""
                onChange={(({target})=>setTitle(target.value))}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel>Author</FormLabel>
                <FormControl 
                type="text"
                name="author"
                value={author}
                placeholder=""
                onChange={(({target})=>setAuthor(target.value))}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel>Published</FormLabel>
                <FormControl 
                type="number"
                name="published"
                value={published}
                placeholder=""
                onChange={(({target})=>setPublished(target.value))}
                />
            </FormGroup>

            <FormGroup>
                <Container className="p-0">
                    <FormLabel>New Genre</FormLabel>
                    <Row>
                        <Col xs={8} md={9} lg={10} >
                            <FormControl 
                            type="text"
                            name="genre"
                            value={genre}
                            placeholder=""
                            onChange={(({target})=>setGenre(target.value))}
                            />
                        </Col>
                        <Col xs={4} md={3} lg={2} className="gap-2">
                            <Button onClick={addGenre} as="div" className=" mt-2 " variant="secondary">Add</Button>
                            <Button onClick={deleteGenre} as="div" className=" mt-2 mr-2" variant="danger">Delete</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        Genres:
                    </Row>
                    <Row>
                        {genres.join(',')}
                    </Row>
                </Container>

            </FormGroup>
            <Row className="justify-content-center mt-2">
                <Col xs="auto">
                <Button type="submit" variant='primary'>Create</Button>
                </Col>
            </Row>
        </Form>
    )
}