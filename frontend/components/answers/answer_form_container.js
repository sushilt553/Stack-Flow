import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { postAnswer } from '../../actions/answer_stack_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        answer: { body: "", questionId: ownProps.questionId },
        formType: 'Post Your Answer'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (answer) => dispatch(postAnswer(answer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);