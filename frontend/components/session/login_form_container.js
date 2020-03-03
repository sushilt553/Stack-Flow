import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(loginUser(user)),
        login: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);