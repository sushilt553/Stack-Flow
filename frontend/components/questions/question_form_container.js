import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { postQuestion } from '../../actions/stack_actions';

const mapStateToProps = state => {
    return {
        question: { title: '', body: '', tag: '' },
        formType: 'Post question'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitQuestion: (question) => dispatch(postQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);