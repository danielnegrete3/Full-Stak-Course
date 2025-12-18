import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import { BlogNavigation } from "../components/BlogNavigation"

export const BlogsLayout = () => {
    

    return(
        <Container>
            <BlogNavigation/>
                        
            <Outlet/>
        </Container>
    )
}