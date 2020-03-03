import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import NavBarContainer from './main/nav_bar_container';
import HomePage from '../components/main/home_page';

const App = () => {
    return (
        <div>
            <NavBarContainer />    
        <Switch>
            <AuthRoute path={`/signup`} component={SignupFormContainer} />
            <AuthRoute path={`/login`} component={LoginFormContainer} />
            <ProtectedRoute path={`/`} component={HomePage} />
            <Redirect to={`/login`}/>
        </Switch>
        </div>
    )
}

export default App;