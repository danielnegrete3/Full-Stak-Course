import { Container } from "react-bootstrap"
import { Outlet } from "react-router"
import { Menu } from "../components/Menu"

export const Basic = () => {

    return(
        <Container>
            <Menu/>
            <Outlet/>
        </Container>
    )
}