import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../main/sidebar';
import QuestionIndexContainer from '../questions/questions_index_container';

class HomePage extends React.Component{

    render(){
        return (
            <div className="main-home-page">
                <div className="side-bar"><Sidebar /></div>
                <section className="index-container">
                    <button><Link to='/questions/new'>Ask Question</Link></button>
                    <div className="question-index"><QuestionIndexContainer /></div>
                </section>
            </div>
        )
    }
}

export default HomePage