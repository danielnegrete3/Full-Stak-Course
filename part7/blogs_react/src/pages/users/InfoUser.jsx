import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const InfoUser = ({}) => {
    const { id } = useParams();

    const user = useSelector((state) => state.user.array.find((item) => item.id === id))

    return(
        <div>
            <h3>User {user.name}  ({user.username})</h3>
            <h4>Added Blogs</h4>
            <ul>
                {user.blogs.map(item =>
                    <li>{item.title}</li>
                )}
            </ul>
        </div>
    )
}