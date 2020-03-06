import { connect } from 'react-redux';
import QuestionDetailsShow from './question_details_show';
import { requestQuestion, deleteQuestion } from '../../actions/question_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.questionId;
    const question = state.entities.questions[questionId];
    return {
        question: question,
        sessionId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsShow);