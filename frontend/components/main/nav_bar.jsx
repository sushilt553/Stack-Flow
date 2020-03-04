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
                    <button>Products</button>
                    <button>Customers</button>
                </div>

                <nav className='search-bar'>
                    <img src={window.glass}/>
                    <input type="text" placeholder="Search..."/>
                </nav>

                <ul className='sign-page'>
                    <li><button className='log-link'>
                    <Link to="/login">Log In</Link>
                    </button></li>
                    <li><button className='sign-link'>
                    <Link to="/signup">Sign Up</Link>
                    </button></li>
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
                        <button>Products</button>
                        <button>Customers</button>
                    </div>

                    <nav className='search-bar'>
                        <img src={window.glass} />
                        <input type="text" placeholder="Search..." />
                    </nav>

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