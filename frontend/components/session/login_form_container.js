import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        formType: 'Log In'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);