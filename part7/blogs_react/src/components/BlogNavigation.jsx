import { Badge, CardBody, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router"
import { setAuthUser } from "../features/auth/authSlice"

export const BlogNavigation = () => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const handleLogout = () => {
        globalThis.localStorage.removeItem('blogsUser')
        dispatch(setAuthUser({user:null}))
        navigation('/login')
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">Blogs App</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                    <NavLink to={'/blogs/create'} >Nuevo Blog</NavLink>
                    <NavLink to={'/blogs/all'}>All Blogs</NavLink>
                    <NavLink to={'/users/all'}>All Users</NavLink>
                </Nav>
                </NavbarCollapse>
                <CardBody as={'aside'}>
                    {user.name} logged in <Badge as={'button'} bg="secondary" onClick={handleLogout}>logout</Badge>
                </CardBody>
            </Container>
        </Navbar>
    )
}