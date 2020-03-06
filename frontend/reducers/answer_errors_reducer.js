import {
    RECEIVE_ANSWER_ERRORS,
    RECEIVE_ANSWER,
    CLEAR_ANSWER_ERRORS
} from '../actions/answer_stack_actions';

const AnswerErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ANSWER_ERRORS:
            return action.errors;
        case RECEIVE_ANSWER:
            return [];
        case CLEAR_ANSWER_ERRORS:
            return [];
        default:
            return state;

    }
}

export default AnswerErrorsReducer;