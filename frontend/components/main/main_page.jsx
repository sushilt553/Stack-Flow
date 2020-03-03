import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {

        const main = !this.props.user ? (
            <div>
                <h1>Stack Flow</h1>
                <Link to="/signup">Sign Up</Link>
                <br />
                <Link to="/login">Log In</Link>
            </div>
        ) : (
                <div>
                    <h1>Welcome to Stack Flow: {this.props.user.username}</h1>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            )

        return (
            <div>
                {main}
            </div>
        )
    }
}

export default MainPage;