import React from 'react';

class SplashPage extends React.Component{

    render(){
        return (
            <div class='splash'>
                <img src={window.splash}/>
                <div class='splash-content'>
                    <div class='splash-h-p'>
                        <h1 class='splash-header'>We love people who code</h1>
                        <p class='splash-paragraph'>We are here to empower developers and connect them with each other to solve software engineering problems.</p>
                    </div>
                    <div class='btns'>
                        <button class='btn-1'>For Developers</button>
                        <button class='btn-2'>For Businesses</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashPage;