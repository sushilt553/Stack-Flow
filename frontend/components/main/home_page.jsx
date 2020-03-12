import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../main/sidebar';
import QuestionIndexContainer from '../questions/questions_index_container';
import BlogPageContainer from './blog_page_container';
import Footer from '../main/footer';

class HomePage extends React.Component{

    render(){
        return (
            <div>
                <div className="main-home-page">
                    <Sidebar />
                    <section className="index-container">
                        <section className="front-page">
                            <div className="block-top">
                                <h2>Top Questions</h2>
                                <Link to='/questions/new'><button className="ask-button">Ask Question</button></Link>
                            </div>
                            <div className="question-index"><QuestionIndexContainer /></div>
                        </section>
                        <BlogPageContainer/>
                    </section>
                </div>
                <Footer />
            </div>  
        )
    }
}

export default HomePage