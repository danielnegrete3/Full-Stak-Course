import { CardTitle, CloseButton, Col, Row } from "react-bootstrap"
import { NewBook } from "../components/NewBook"
import { useNavigate } from "react-router"

export const AddBooks = () => {
    const navigate = useNavigate()

    const cancelClick = () => {
        navigate('/book/all')
    }
    return(
        <>
            <CardTitle as="h2">New Book</CardTitle>
            <Row className="justify-content-end">
                <Col xs="auto">
                <CloseButton onClick={cancelClick}/>
                </Col>
            </Row>
            <NewBook></NewBook>
        </>
    )
}