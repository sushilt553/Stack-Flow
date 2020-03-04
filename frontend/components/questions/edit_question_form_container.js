import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { requestQuestion, updateQuestion, clearQuestionErrors } from '../../actions/stack_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.questionId;
    const question = state.entities.questions[questionId]
    return {
        question: question,
        formType: 'Update question',
        errors: state.errors.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitQuestion: (question) => dispatch(updateQuestion(question)),
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        clearQuestionErrors: () => dispatch(clearQuestionErrors())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm)