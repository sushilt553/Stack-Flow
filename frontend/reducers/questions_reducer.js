import {
    RECEIVE_ALL_QUESTIONS_AND_ANSWERS,
    REMOVE_QUESTION,
    RECEIVE_QUESTION_AND_ANSWERS
} from '../actions/question_stack_actions';

import { RECEIVE_ANSWER_AND_QUESTION } from '../actions/answer_stack_actions';

const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS_AND_ANSWERS:
            return Object.assign(newState, action.payload.questions);
        case RECEIVE_QUESTION_AND_ANSWERS:
            return Object.assign(newState, {
                [action.payload.question.id]: action.payload.question
            });
        case RECEIVE_ANSWER_AND_QUESTION:
            return Object.assign(newState, {
                [action.payload.question.id]: action.payload.question
            })
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        default:
            return state;
    }
}

export default QuestionsReducer;