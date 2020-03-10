import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../main/sidebar';
import QuestionIndexContainer from '../questions/questions_index_container';
import BlogPageContainer from './blog_page_container';

class HomePage extends React.Component{

    render(){
        return (
            <div className="main-home-page">
                <Sidebar />
                <section className="index-container">
                    <section className="front-page">
                        <div className="block-top">
                            <h2>Top Questions</h2>
                            <button className="ask-button"><Link to='/questions/new'>Ask Question</Link></button>
                        </div>
                        <div className="question-index"><QuestionIndexContainer /></div>
                    </section>
                    <BlogPageContainer/>
                </section>
            </div>
        )
    }
}

export default HomePage