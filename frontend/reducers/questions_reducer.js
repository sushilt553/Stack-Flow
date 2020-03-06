import {
    RECEIVE_QUESTION,
    RECEIVE_ALL_QUESTIONS,
    REMOVE_QUESTION
} from '../actions/question_stack_actions';

import { RECEIVE_ANSWER } from '../actions/answer_stack_actions';

const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign(newState, action.questions);
        case RECEIVE_QUESTION:
            return Object.assign(newState, {
                [action.question.id]: action.question
            });
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        case RECEIVE_ANSWER:
            const questionId = newState[action.answer.question_id];
            newState[questionId].answers.push(action.answer);
            return newState;
        default:
            return state;
    }
}

export default QuestionsReducer;