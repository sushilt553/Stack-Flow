import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', password: '', email: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitForm(this.state)
        // .then(() => this.props.history.push("/home"))
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
   
        const errors = this.props.errors.map((error) => 
            <li className='login-error'>{error}</li>)
    
        const demoUser = { username: 'guest', password: 'hunter12' };

        const link = (this.props.formType === 'Sign Up') ?
            <div className='login-link'>
                Already have an account? <Link to={`/login`} ><span>Login</span></Link>
            </div>
            :
            <div className='demo-signup'> 
                <button className='demo-login' onClick={() => 
                    this.props.login(demoUser)}>Demo Login</button>
                <div className='sign-up-link'>
                    Don't have an account? <Link to={`/signup`} ><span>Signup</span></Link>
                </div>
            </div>

        return (
            <>
                <div className='form'>
                    <h2 className='form-type'>{this.props.formType}</h2>
                    <form className='form-page' onSubmit={this.handleSubmit}>
                        <label>Username:
                            <br/>
                            <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                        </label>
                        <label>Password:
                            <br/>
                            <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                        </label>
                        {email}
                        <input type="submit" value={this.props.formType}/>
                    </form>
                    <ul className='login-errors'>
                        {errors}
                    </ul>
                {link}
                </div>
            </>
        )
    }
}

export default SessionForm;