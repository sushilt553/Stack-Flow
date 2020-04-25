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
                <a href="http://tsushil.com/" target="_blank"><li>Portfolio</li></a>
                <a href="https://github.com/sushilt553/Stack-Flow" target="_blank"><li>Github</li></a>
                <a href="https://www.linkedin.com/in/sushil-thapa-546800159/" target="_blank"><li>LinkedIn</li></a>
                <a href="https://angel.co/u/sushil-thapa-2" target="_blank"><li>Angellist</li></a>
            </ul>
        </section>
    )
}

export default Footer;