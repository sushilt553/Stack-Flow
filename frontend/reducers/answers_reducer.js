import { RECEIVE_ALL_QUESTIONS_AND_ANSWERS } from '../actions/question_stack_actions';
import { RECEIVE_ANSWER } from '../actions/answer_stack_actions';

const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS_AND_ANSWERS:
            return Object.assign(newState, action.payload.answers);
        case RECEIVE_ANSWER:
            return Object.assign(newState, {
                [action.answer.id]: action.answer
            });
        default:
            return state;
    }
}

export default AnswersReducer;