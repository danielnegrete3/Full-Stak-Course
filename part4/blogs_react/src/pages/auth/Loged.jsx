
const Loged = ({user,handleLogout}) =>{

    return(
        <aside>
            {user.name} logged in <button onClick={handleLogout}>logout</button>
        </aside>
    )
}

export default Loged