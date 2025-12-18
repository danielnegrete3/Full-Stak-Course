import { Row } from "react-bootstrap"
import { NavLink } from "react-router"

export const BlogCard = ({blog}) => {
     const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    return(
        <Row style={blogStyle}>
            <NavLink to={`/blogs/view/${blog.id}`}> 
                {blog.title}
            </NavLink>
        </Row>
    )
}