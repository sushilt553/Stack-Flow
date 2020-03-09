import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as test from './actions/vote_stack_actions';
 
//test
window.question = test.questionVote
window.answer = test.answerVote

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = {};

    if(window.currentUser){
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        }
    }
    delete window.currentUser
    const store = configureStore(preloadedState)
    //test
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
})