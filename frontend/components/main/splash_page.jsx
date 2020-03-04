import React from 'react';

class SplashPage extends React.Component{

    render(){
        return (
            <div class='splash'>
                <img src={window.splash} />
                <div className='splash-content'>
                    <div className='splash-h-p'>
                        <h1 className='splash-header'>We love people who code</h1>
                        <p className='splash-paragraph'>We are here to empower developers and connect them with each other to solve software engineering problems.</p>
                    </div>
                    <div className='btns'>
                        <button className='btn-1'>For Developers</button>
                        <button className='btn-2'>For Businesses</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashPage;