import {  Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { NavLink } from "react-router"

export const Menu = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">Library App</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                    <NavLink to={'/author/all'}>Authors</NavLink>
                    <NavLink to={'/author/edit'}>Edit Authors</NavLink>
                    <NavLink to={'/book/all'}>Books</NavLink>
                    <NavLink to={'/book/add'}>Add Books</NavLink>

                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}