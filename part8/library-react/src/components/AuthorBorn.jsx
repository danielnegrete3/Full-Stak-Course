import { useMutation, useQuery } from "@apollo/client/react"
import { useState } from "react"
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap"
import { EDIT_AUTHOR } from "../graphql/mutations/author"
import { ALL_AUTHORS } from "../graphql/queries/author"

export const AuthorBorn = () => {

    const [born,setBorn] = useState('')
    const [author,setAuthor] = useState('')
    const result = useQuery(ALL_AUTHORS,{fetchPolicy: 'network-only'})
    const [editAuthor] = useMutation(EDIT_AUTHOR)
    
    
    if (result.loading) {
        return <div>loading...</div>
    }else if(author === '' && result.data.allAuthors.length > 0){
        setAuthor(result.data.allAuthors[0].name)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!author || born === '') return

        editAuthor({variables:{name:author,born:Number(born)}})
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>
                    Select Author 
                </FormLabel>
                
                <FormSelect
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    {result.data.allAuthors.map((value) => 
                        <option value={value.name}>{value.name}</option>
                    )}
                </FormSelect>

            </FormGroup>

            <FormGroup>
                <FormLabel>
                Born Year 
                </FormLabel>
                <FormControl
                    type="number"
                    name="born"
                    value={born}
                    placeholder='born'
                    onChange={({ target }) => setBorn(target.value)}
                />

            </FormGroup>

            <Row className="justify-content-center mt-2">
                <Col xs="auto">
                <Button type="submit" variant='primary'>Edit</Button>
                </Col>
            </Row>
        </Form>
    )
}