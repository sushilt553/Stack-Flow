import { connect } from 'react-redux';
import BlogPage from './blog_page';
import { updateQuestion } from '../../actions/question_stack_actions';

const mapStateToProps = state => {
    state.entities.topQuestions.map((topQuestion) =>
            topQuestion.tags = state.entities.questions[topQuestion.id].tags
        )
        // debugger;
    return {
        topQuestions: state.entities.topQuestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateQuestion: (question) => dispatch(updateQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);