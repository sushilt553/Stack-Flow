import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';
import QuestionErrorsReducer from './question_errors_reducer';
import AnswerErrorsReducer from './answer_errors_reducer';
import VoteErrorsReducer from './vote_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    user: UserErrorsReducer,
    question: QuestionErrorsReducer,
    answer: AnswerErrorsReducer,
    vote: VoteErrorsReducer
})

export default ErrorsReducer;