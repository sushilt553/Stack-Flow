import {
    RECEIVE_QUESTION_ERRORS,
    RECEIVE_QUESTION,
    RECEIVE_ALL_QUESTIONS,
    CLEAR_QUESTION_ERRORS
} from '../actions/stack_actions';

const QuestionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        case RECEIVE_QUESTION:
            return [];
        case RECEIVE_ALL_QUESTIONS:
            return [];
        case CLEAR_QUESTION_ERRORS:
            return [];
        default:
            return state;

    }
}

export default QuestionErrorsReducer;