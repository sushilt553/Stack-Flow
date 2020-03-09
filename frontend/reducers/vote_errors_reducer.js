import {
    RECEIVE_QUESTION_VOTE,
    RECEIVE_ANSWER_VOTE,
    CLEAR_VOTE_ERRORS,
    RECEIVE_VOTE_ERRORS
} from '../actions/vote_stack_actions';

const VoteErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VOTE_ERRORS:
            return action.errors;
        case RECEIVE_QUESTION_VOTE:
            return [];
        case RECEIVE_ANSWER_VOTE:
            return [];
        case CLEAR_VOTE_ERRORS:
            return [];
        default:
            return state;
    }
}

export default VoteErrorsReducer;