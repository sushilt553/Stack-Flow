import React from 'react';
import {Redirect} from 'react-router-dom';

class Greeting extends React.Component{

    render(){

        if (!this.props.user){
            return <Redirect to={`/login`} />
        }

        return (
            <div>
                <h1>Welcome to Stack Flow: {this.props.user.username}</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default Greeting;