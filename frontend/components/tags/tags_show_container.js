import { connect } from 'react-redux';
import TagShow from './tag_show';
import { requestTag } from '../../actions/tags_stack_actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.tagId;
    debugger
    let tagObj = state.entities.tagQuestions[id];
    let question = undefined;

    if (tagObj) {
        question = Object.values(tagObj)
    }

    return {
        questionsObj: question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestTag: (tagId) => dispatch(requestTag(tagId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagShow);