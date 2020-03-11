import React from 'react';
import {Link} from 'react-router-dom';
import BlogPageContainer from '../main/blog_page_container';
import Sidebar from '../main/sidebar';
import QuestionIndexItem from '../questions/question_index_item';

class Search extends React.Component{

    componentDidMount(){
        this.props.findQuestions(this.props.tags)
    }

    render(){

        if (!this.props.questions){
            return null;
        }
    
        const questions = this.props.questions.map((question) => <QuestionIndexItem key={question.id} updateQuestion={this.props.updateQuestion} question={question} />)

        return (

            <div className="main-home-page">
                <Sidebar />
                <section className="index-container">
                    <section className="front-page">
                        <div className="block-top">
                            <h2>Tagged[{this.props.tags}] questions found</h2>
                            <Link to='/questions/new'><button className="ask-button">Ask Question</button></Link>
                        </div>
                        <ul>
                            {questions}
                        </ul>
                    </section>
                    <BlogPageContainer />
                </section>
            </div>
        )
    }
}

export default Search;