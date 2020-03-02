import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = {
    id: null
}

const SessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.user.id })
        case LOGOUT_CURRENT_USER:
            return initialState;
        default:
            return state;
    }
}

export default SessionReducer;