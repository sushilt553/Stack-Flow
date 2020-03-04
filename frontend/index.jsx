import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test only
// import {requestAllQuestions, requestQuestion, deleteQuestion, updateQuestion} from './actions/stack_actions';

// window.questions = requestAllQuestions;
// window.question = requestQuestion;
// window.delete = deleteQuestion;
// window.update = updateQuestion;

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
    // window.store = store;
    ReactDOM.render(<Root store={store} />, root);
})