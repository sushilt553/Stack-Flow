import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { postAnswer, clearAnswerErrors } from '../../actions/answer_stack_actions';
import { requestAllQuestions } from '../../actions/question_stack_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        answer: { body: "", questionId: ownProps.questionId },
        formType: 'Post Your Answer',
        errors: state.errors.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (answer) => dispatch(postAnswer(answer)),
        clearAnswerErrors: () => dispatch(clearAnswerErrors()),
        requestAllQuestions: () => dispatch(requestAllQuestions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);