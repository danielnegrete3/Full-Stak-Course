import { useSelector } from "react-redux";
import {  Navigate, useParams } from "react-router";

export const InfoUser = ({}) => {
    const { id } = useParams();

    const user = useSelector((state) => state.user.array.find((item) => item.id === id))
    console.log(user)
    if(user === undefined){
        return <Navigate to="/blogs/all" replace />;
    } 

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