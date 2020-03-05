import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { postQuestion, clearQuestionErrors } from '../../actions/stack_actions';

const mapStateToProps = state => {
    return {
        question: { title: '', body: '', tags: '' },
        formType: 'Ask a public question',
        buttonType: 'Review your question',
        errors: state.errors.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitQuestion: (question) => dispatch(postQuestion(question)),
        clearQuestionErrors: () => dispatch(clearQuestionErrors)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);