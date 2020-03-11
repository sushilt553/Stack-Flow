import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {

        const main = !this.props.user ? (
            <header className='header'>
                <nav className='header-nav'>
                    <Link className='links' to={`/`} >
                        <h3 className="header-logo">
                            <img className='img-logo' src={window.logo} />
                            <div>stack<strong>flow</strong></div>
                        </h3>
                    </Link>
                </nav>
                <div className='products'>
                    <p>Products</p>
                    <p>Customers</p>
                </div>

                <nav className='search-bar'>
                    <img src={window.glass}/>
                    <input type="text" placeholder="Search..."/>
                </nav>

                <ul className='sign-page'>
                    <li><Link to="/login">
                        <button className='log-link'>Log In</button></Link>
                    </li>
                    <li><Link to="/signup">
                        <button className='sign-link'>Sign Up</button>
                        </Link>
                    </li>
                </ul>   
            </header>
        ) : (
                <header className='header'>
                    <nav className='header-nav'>
                        <Link to='/'>
                            <h3 className="header-logo">
                                <img className='img-logo' src={window.logo} />
                                <div>stack<strong>flow</strong></div>
                            </h3>
                        </Link>
                    </nav>
                    
                    <div className='products'>
                        <p>Products</p>
                        <p>Customers</p>
                    </div>

                    <nav className='search-bar'>
                        <img src={window.glass} />
                        <input type="text" placeholder="Search..." />
                    </nav>
                    <i className="fas fa-user">
                        <span>  Welcome {this.props.user.username}!</span>
                    </i>
                    
                    <ul>
                        <li><button className='logout' onClick={this.props.logout}>
                            Logout
                        </button>
                        </li>
                    </ul>
                </header>
            )

        return (
            <>
            {main}
            </>
        )
    }
}

export default NavBar;