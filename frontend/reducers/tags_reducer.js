import { RECEIVE_ALL_TAGS } from '../actions/tags_stack_actions';

const TagsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_TAGS:
            return Object.assign(newState, action.tags)
        default:
            return state;
    }
}

export default TagsReducer;