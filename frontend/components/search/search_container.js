import { connect } from 'react-redux';
import Search from './search';
import { findQuestions, clearSearchItems } from '../../actions/search_actions';
import { updateQuestion } from '../../actions/question_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const tags = ownProps.match.params.tags
    const questions = state.entities.searchQuestions.questions
    let questionsObj = [];
    if (questions) {
        questionsObj = Object.values(questions);
    }
    // debugger;
    return {
        tags: tags,
        questions: questionsObj
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findQuestions: (tags) => dispatch(findQuestions(tags)),
        updateQuestion: (question) => dispatch(updateQuestion(question)),
        clearSearchItems: () => dispatch(clearSearchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);