import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    const errors = state.errors.user;
    // state.errors.user = []; //Is this a correct way to do it?
    return {
        formType: 'Sign Up',
        errors: errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(createUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);