import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../main/sidebar';
import QuestionIndexContainer from '../questions/questions_index_container';

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
                    <section className="side-page">
                        <article className="blog-post">
                            <h3>Blog</h3>
                            <li>You need someone to show you how to teach yourself</li>
                            <li>A modern 'Hello, World' program needs more than just code</li>
                            <h3>Featured on Meta</h3>
                            <li>The Q1 2020 Community Roadmap is on the Blog</li>
                            <li>An Update On Creative Commons Licensing</li>
                            <li>Our Commitment to responding to Meta and Moderators</li>
                            <li>Why is the mission of Meta, as a community?</li>
                        </article>

                        <div>
                            <h3 className="hot-questions">Hot Network Questions</h3>
                        </div>

                    </section>
                </section>
            </div>
        )
    }
}

export default HomePage