import { useContext } from "react"
import {  Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router"
import { AuthContext } from "../context/providers/AuthProvider"

export const Menu = () => {
    const [state,dispatch] = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogout = () => {
        globalThis.localStorage.setItem("library-react",null)
        dispatch({action:"LOGIN",payload:{token,user:result.data.me}})
        navigate('/')
    }

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
                            <NavLink to={'/book/recomendations'}>Recomendations</NavLink>
                            <NavLink onClick={handleLogout}>Logout</NavLink>
                        </>
                    }
                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}