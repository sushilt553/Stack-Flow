import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from '../thunk/thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;