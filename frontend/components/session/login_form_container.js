import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    const errors = state.errors.session;
    // state.errors.session = []; //Is this the correct way to do it?
    return {
        formType: 'Log In',
        errors: errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(loginUser(user)),
        login: (user) => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);