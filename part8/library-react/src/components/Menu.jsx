import { useContext } from "react"
import {  Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { NavLink } from "react-router"
import { AuthContext } from "../context/providers/AuthProvider"

export const Menu = () => {
    const [state,dispatch] = useContext(AuthContext)

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">Library App</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                    <NavLink to={'/author/all'}>Authors</NavLink>
                    <NavLink to={'/book/all'}>Books</NavLink>
                    {
                        state.user === null &&
                        <NavLink to={'/auth/login'}>Login</NavLink>
                    }
                    {
                        state.user != null &&
                        <>
                            <NavLink to={'/author/edit'}>Edit Authors</NavLink>
                            <NavLink to={'/book/add'}>Add Books</NavLink>
                        </>
                    }
                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}