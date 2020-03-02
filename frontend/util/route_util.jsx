import {connect} from 'react-redux';
import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

const Auth = ({component: Component, path, exact, loggedIn}) => (
    <Route 
        path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Redirect to={`/`} /> : <Component {...props} />
        }
    />
)

const Protected = ({component: Component, path, exact, loggedIn}) => (
    <Route 
        path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Component {...props} /> : <Redirect to={`/`} />
        }
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));