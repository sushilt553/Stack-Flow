import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as APIUtil from './actions/session_actions'

// const store = configureStore()
// window.store = store;
// window.login = APIUtil.loginUser;
// window.logout = APIUtil.logoutUser;  
// window.signup = APIUtil.createUser;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore()
    ReactDOM.render(<Root store={store} />, root);
})