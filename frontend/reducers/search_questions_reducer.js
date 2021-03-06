import { RECEIVE_SEARCH_ITEMS, CLEAR_SEARCH_ITEMS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SEARCH_ITEMS:
            return Object.assign(newState, action.payload);
        case CLEAR_SEARCH_ITEMS:
            return { questions: {}, top_questions: {} };
        default:
            return state
    }
}

export default SearchReducer;