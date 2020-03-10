import { RECEIVE_ALL_QUESTIONS_AND_ANSWERS } from '../actions/question_stack_actions';

const TopQuestionsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS_AND_ANSWERS:
            return action.payload.top_questions
        default:
            return state;
    }
}

export default TopQuestionsReducer;