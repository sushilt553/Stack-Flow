import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import TopQuestionsReducer from './top_questions_reducer';
import TagsReducer from './tags_reducer';
import TagQuestionsReducer from './tag_questions_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer,
    topQuestions: TopQuestionsReducer,
    allTags: TagsReducer,
    tagQuestions: TagQuestionsReducer
})

export default entitiesReducer;