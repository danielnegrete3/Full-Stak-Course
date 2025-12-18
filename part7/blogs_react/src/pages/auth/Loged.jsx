import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const Loged = ({ user,handleLogout }) => {

  return(
    <Container as="aside">
      {user.name} logged in <Button variant="secondary" size={6} onClick={handleLogout}>logout</Button>
    </Container>
  )
}

Loged.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default Loged