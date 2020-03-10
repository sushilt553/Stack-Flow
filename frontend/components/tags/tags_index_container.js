import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { requestAllTags } from '../../actions/tags_stack_actions';

const mapStateToProps = state => {
    // debugger;
    return {
        allTags: Object.values(state.entities.allTags)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAllTags: () => dispatch(requestAllTags())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);