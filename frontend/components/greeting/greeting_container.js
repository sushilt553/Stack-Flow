import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser, loginUser } from '../../actions/session_actions';

const mapStateToProps = state => {
    const id = state.session.id
    const user = state.entities.users[id]
    return {
        user: user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(loginUser(user)),
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);