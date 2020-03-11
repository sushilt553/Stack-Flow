import { connect } from 'react-redux';
import TagShow from './tag_show';
import { requestTag } from '../../actions/tags_stack_actions';
import { requestAllQuestions, updateQuestion } from '../../actions/question_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.tagId;
    // debugger
    let tagObj = state.entities.tagQuestions[id];
    let question = undefined;
    let tag = state.entities.allTags[id]
    let tagName = ""
    if (tag) {
        tagName = tag.name
    }

    if (tagObj) {
        question = Object.values(tagObj)
    }

    return {
        questionsObj: question,
        tagName: tagName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestTag: (tagId) => dispatch(requestTag(tagId)),
        requestAllQuestions: () => dispatch(requestAllQuestions()),
        updateQuestion: (question) => dispatch(updateQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagShow);