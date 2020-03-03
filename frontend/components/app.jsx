import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import MainPageContainer from '../components/main/main_page_container';

const App = () => {
    return (
        <div>
            <Route exact path={'/'} component={MainPageContainer} />
        <Switch>
            <AuthRoute exact path={`/signup`} component={SignupFormContainer} />
            <AuthRoute exact path={`/login`} component={LoginFormContainer} />
            {/* <ProtectedRoute exact path={`/`} component={GreetingContainer} /> */}
        </Switch>
        </div>
    )
}

export default App;