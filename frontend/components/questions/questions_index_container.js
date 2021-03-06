import { connect } from 'react-redux';
import QuestionsIndex from './questions_index';
import { requestAllQuestions, updateQuestion } from '../../actions/question_stack_actions';

const mapStateToProps = (state) => {
    // debugger;
    return {
        questions: Object.values(state.entities.questions),
        topQuestions: state.entities.top_questions
            // sessionId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        requestAllQuestions: () => dispatch(requestAllQuestions()),
        updateQuestion: (question) => dispatch(updateQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);