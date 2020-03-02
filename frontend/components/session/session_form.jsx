import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', password: '', email: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitForm(this.state)
        .then(() => this.props.history.push("/"))
    }

    render(){

        const email = (this.props.formType === 'Sign Up') ?
            <label>Email:
                <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={this.update('email')}
                />
            </label>
            : null;
   
        const errors = this.props.errors.map((error) => <li>{error}</li>)

        const link = (this.props.formType === 'Sign Up') ?
            <Link to={`/login`} >Login</Link>
            :
            <Link to={`/signup`} >Signup</Link>;

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    <label>Password:
                        <input 
                        type="password" 
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    {email}
                    <input type="submit" value={this.props.formType}/>
                </form>
                <ul>
                    {errors}
                </ul>
                {link}
            </div>
        )
    }
}

export default SessionForm;