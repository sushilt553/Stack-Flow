import { connect } from 'react-redux';
import QuestionDetailsShow from './question_details_show';
import { requestQuestion, deleteQuestion } from '../../actions/question_stack_actions';
import { find_answers } from '../../selectors/selectors';
import { deleteAnswer } from '../../actions/answer_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.questionId;
    const question = state.entities.questions[questionId];
    debugger;
    let answers = [];
    let count = 0;
    if (question) {
        answers = find_answers(question, state)
        count = question.answer_ids.length
    }

    return {
        question: question,
        answers: answers,
        answersCount: count,
        sessionId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsShow);