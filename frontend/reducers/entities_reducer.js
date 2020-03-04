import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import QuestionsReducer from './questions_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    questions: QuestionsReducer
})

export default entitiesReducer;