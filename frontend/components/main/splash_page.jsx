import React from 'react';
import Footer from '../main/footer';

class SplashPage extends React.Component{

    render(){
        return (
            <div className="splash">
                <img className="splash-image" src={window.splash} />
                <div className="splash-p">
                    <div className="splash-headers">
                        <h2>We love people who code</h2>
                        <p>We are here to empower developers and connect them with each other to solve software engineering problems.</p>
                    </div>
                    <div className="dev-bus-btns">
                        <p className="dev-bus-1">For Developers</p>
                        <p className="dev-bus-2">For Businesses</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SplashPage;