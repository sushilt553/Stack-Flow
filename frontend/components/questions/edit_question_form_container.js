import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { requestQuestion, updateQuestion, clearQuestionErrors } from '../../actions/question_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.questionId;
    // debugger;
    const question = state.entities.questions[questionId]
    return {
        question: question,
        formType: 'Edit your question',
        buttonType: 'Update question',
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