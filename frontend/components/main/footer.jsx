import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <section className='footer'>
            <Link className='footer-head-logo' to={`/`} >
                <img className='img-logo' src={window.logo} />
                <p className='footer-head'>STACK FLOW</p>
            </Link>
            <ul className='footer-list'>
                <a href="https://github.com/sushilt553/Stack-Flow"><li>Github</li></a>
                <a href="https://www.linkedin.com/in/sushil-thapa-546800159/"><li>LinkedIn</li></a>
            </ul>
        </section>
    )
}

export default Footer;