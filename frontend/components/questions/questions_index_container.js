import { connect } from 'react-redux';
import QuestionsIndex from './questions_index';
import { requestAllQuestions } from '../../actions/stack_actions';

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.entities.questions),
        // sessionId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        requestAllQuestions: () => dispatch(requestAllQuestions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);