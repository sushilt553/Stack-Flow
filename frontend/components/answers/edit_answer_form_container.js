import { connect } from 'react-redux';
import EditAnswerForm from './edit_answer_form';
import { requestAnswer, updateAnswer, clearAnswerErrors } from '../../actions/answer_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const answerId = ownProps.match.params.answerId;
    const answer = state.entities.answers[answerId]
        // debugger;
    return {
        answer: answer,
        formType: 'Update answer',
        errors: state.errors.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAnswer: (answerId) => dispatch(requestAnswer(answerId)),
        submitForm: (answer) => dispatch(updateAnswer(answer)),
        clearAnswerErrors: () => dispatch(clearAnswerErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm);