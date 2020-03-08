import {
    RECEIVE_QUESTION_ERRORS,
    RECEIVE_QUESTION_AND_ANSWERS,
    RECEIVE_ALL_QUESTIONS_AND_ANSWERS,
    CLEAR_QUESTION_ERRORS
} from '../actions/question_stack_actions';

const QuestionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        case RECEIVE_QUESTION_AND_ANSWERS:
            return [];
        case RECEIVE_ALL_QUESTIONS_AND_ANSWERS:
            return [];
        case CLEAR_QUESTION_ERRORS:
            return [];
        default:
            return state;

    }
}

export default QuestionErrorsReducer;