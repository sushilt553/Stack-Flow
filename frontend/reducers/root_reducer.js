import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: SessionReducer
})

export default RootReducer;