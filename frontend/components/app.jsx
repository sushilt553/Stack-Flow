import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import QuestionFormContainer from './questions/question_form_container';
import EditQuestionFormContainer from './questions/edit_question_form_container';
import NavBarContainer from './main/nav_bar_container';
import HomePage from '../components/main/home_page';
import SplashPage from '../components/main/splash_page';
import QuestionDetailsShowContainer from './questions/question_details_show_container';

const App = () => {
    return (
        <div>
            <NavBarContainer />    
        <Switch>
            <ProtectedRoute path={`/home`} component={HomePage} />
            <ProtectedRoute path={`/questions/:questionId`} component={QuestionDetailsShowContainer}/>
            <ProtectedRoute path={`/questions/:questionId/edit`} component={EditQuestionFormContainer} />
            <ProtectedRoute path={`/questions/new`} component={QuestionFormContainer} />
            <AuthRoute path={`/signup`} component={SignupFormContainer} />
            <AuthRoute path={`/login`} component={LoginFormContainer} />
            <AuthRoute path={`/`} component={SplashPage} />
            <Redirect to={`/login`}/>
        </Switch>
        </div>
    )
}

export default App;