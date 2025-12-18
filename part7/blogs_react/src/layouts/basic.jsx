import { Container } from "react-bootstrap"
import { Outlet } from "react-router"

export const Basic = () => {

    return(
        <Container>
            <Outlet/>
        </Container>
    )
}