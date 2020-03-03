import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {

        const main = !this.props.user ? (
            <>
                <div class='nav-page'>
                    <img src={window.logo} />
                    <h3>Stack Flow</h3>
                </div>
                <div class='sign-page'>
                    <Link to="/signup" class="link">Sign Up</Link>
                    <Link to="/login" class="link">Log In</Link>
                </div>
            </>
        ) : (
                <>
                <div class='nav-page'>
                    <img src={window.logo} />
                    <h3>Stack Flow: {this.props.user.username}</h3>
                </div>
                    <button onClick={this.props.logout}>Logout</button>
                </>
            )

        return (
            <div class="main-page">
                {main}
            </div>
        )
    }
}

export default MainPage;