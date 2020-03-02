import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        formType: 'Sign Up'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);