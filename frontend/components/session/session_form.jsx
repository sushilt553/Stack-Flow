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
        // this.props.history.push("/home")
    }

    render(){

        const email = (this.props.formType === 'Sign Up') ?
            <label>Email
                <br/>
                <input 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.update('email')}
                />
            </label>
            : null;
        
        let usernameError;
        let passwordError;
        let sessionError;
        let emailError;

        this.props.errors.forEach((error) => {
            if(error.includes('Username/Password')){
                sessionError = error
            }else if (error.includes('Username')){
                usernameError = error;
            }else if (error.includes('Password')){
                passwordError = error
            }else if (error.includes('Email')){
                emailError = error
            }
        })
    
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
                    Don't have an account? <Link to={`/signup`} ><span>Sign up</span></Link>
                </div>
            </div>

        return (
            <>
            {/* <div className="login-errors">
                {errors}
            </div> */}
            <section className="form-section">
                <div className='form'>
                    <Link to={`/`}>
                        <img className="img-sign-logo" src={window.logo} />
                    </Link>
                    <p className='session-error'>{sessionError}</p>
                    <form className='form-page' onSubmit={this.handleSubmit}>
                        <label>Username
                            <br/>
                            <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                        </label>
                        <p className='username-error'>{usernameError}</p>
                        <label>Password
                            <br/>
                            <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                        </label>
                        <p className='password-error'>{passwordError}</p>
                        {email}
                        <p className='email-error'>{emailError}</p>
                        <input type="submit" value={this.props.formType}/>
                    </form>
                    {link}
                </div>
            </section>
            </>
        )
    }
}

export default SessionForm;