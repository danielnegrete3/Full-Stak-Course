import PropTypes from 'prop-types'

const Loged = ({ user,handleLogout }) => {

  return(
    <aside>
      {user.name} logged in <button onClick={handleLogout}>logout</button>
    </aside>
  )
}

Loged.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default Loged