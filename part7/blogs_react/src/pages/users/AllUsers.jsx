import { useSelector } from "react-redux"
import { UserCard } from "../../components/UserCard"


export const AllUsers = () => {
    const user = useSelector((state) => state.auth.user)
    const users = useSelector((state) => state.user.array)
    console.log("mi id \t", user.id)
    return (
        <div>
            <h2>All Users</h2>
            <table>
                <thead>
                    <tr>
                        <td>User</td>
                        <td>N° Blogs</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item =>
                        <UserCard key={item.id} user={item} isUser={user.id == item.id}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}