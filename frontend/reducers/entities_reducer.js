import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer
})

export default entitiesReducer;