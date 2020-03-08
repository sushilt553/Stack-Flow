import { RECEIVE_ALL_QUESTIONS_AND_ANSWERS, RECEIVE_QUESTION_AND_ANSWERS } from '../actions/question_stack_actions';
import { REMOVE_ANSWER } from '../actions/answer_stack_actions';
import { RECEIVE_ANSWER_AND_QUESTION } from '../actions/answer_stack_actions';

const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS_AND_ANSWERS:
            return Object.assign(newState, action.payload.answers);
        case RECEIVE_QUESTION_AND_ANSWERS:
            return Object.assign(newState, action.payload.answers)
        case RECEIVE_ANSWER_AND_QUESTION:
            return Object.assign(newState, {
                [action.payload.answer.id]: action.payload.answer
            });
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;
        default:
            return state;
    }
}

export default AnswersReducer;