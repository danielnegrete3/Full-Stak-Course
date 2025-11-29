import { NavLink } from "react-router"

export const UserCard = ({user,isUser}) => {
    return(
        <tr>
            <td>
                <NavLink to={`/users/${user.id}`}> 
                { isUser && <span>{"(you)\t"}</span>}
                {user.name}: ({user.username})
                </NavLink>
            </td>
            <td style={{textAlign:"center"}}>
                {user.blogs.length}
            </td>
        </tr>
    )
}