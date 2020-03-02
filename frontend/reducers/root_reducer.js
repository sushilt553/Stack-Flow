import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer
})

export default RootReducer;