import React from 'react';
import {Route} from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';

const App = () => {
    return (
        <>
            <Route path={`/signup`} component={SignupFormContainer} />
            <Route path={`/login`} component={LoginFormContainer} />
        </>
    )
}

export default App;