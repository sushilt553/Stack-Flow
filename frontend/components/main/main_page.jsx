import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {

        const main = !this.props.user ? (
            <header className='header'>
                <nav className='header-nav'>
                    <img className='img-logo' src={window.logo} />
                    <h3 className="header-logo">
                        <Link to='/'>stack<strong>flow</strong></Link>
                    </h3>
                </nav>
                <nav className='sign-page'>
                    <button className='log-link'>
                        <Link to="/login">Log In</Link>
                    </button>
                    <button className='sign-link'>
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </nav>
            </header>
        ) : (
                <header className='header'>
                    <nav className='header-nav'>
                        <img className='img-logo' src={window.logo} />
                        <h3 className="header-logo">
                            <Link to='/'>stack<strong>flow</strong></Link>
                        </h3>
                    </nav>
                    <button className='logout' onClick={this.props.logout}>
                        Logout
                    </button>
                </header>
            )

        return (
            <>
            {main}
            </>
        )
    }
}

export default MainPage;