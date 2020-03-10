import { RECEIVE_QUESTIONS } from '../actions/tags_stack_actions';

const TagQuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return Object.assign(newState, action.questions)
        default:
            return state;
    }
}

export default TagQuestionsReducer;