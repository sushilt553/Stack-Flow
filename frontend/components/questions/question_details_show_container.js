import { connect } from 'react-redux';
import QuestionDetailsShow from './question_details_show';
import { requestQuestion } from '../../actions/stack_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.questionId;
    const question = state.entities.questions[questionId];
    return {
        question: question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsShow);