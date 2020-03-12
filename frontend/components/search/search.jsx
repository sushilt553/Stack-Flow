import React from 'react';
import {Link} from 'react-router-dom';
import BlogPageContainer from '../main/blog_page_container';
import Sidebar from '../main/sidebar';
import QuestionIndexItem from '../questions/question_index_item';

class Search extends React.Component{

    componentDidUpdate(prevProps) {

        const currentTags = this.props.tags;
        const prevTags = prevProps.tags;

        if (currentTags != prevTags) {
            this.props.clearSearchItems();
            this.props.findQuestions(currentTags)
        }
    }

    componentDidMount(){
        this.props.findQuestions(this.props.tags)
    }

    render(){

        if (!this.props.questions){
            return null;
        }
    
        const questions = this.props.questions.map((question) => <QuestionIndexItem key={question.id} updateQuestion={this.props.updateQuestion} question={question} />)
        // debugger;
        let topic;
        let notFound;

        // debugger;
        if (questions == false){
            topic = <h2>404 Not Found</h2>;
            notFound = <div className='not-found'> Questions related to [{this.props.tags}] not found</div>;
        }else{
            topic = <h2>Tagged [{this.props.tags}] questions found</h2>
            notFound = null;
        }
        return (

            <div className="main-home-page">
                <Sidebar />
                <section className="index-container">
                    <section className="front-page">
                        <div className="block-top">
                            {topic}
                            <Link to='/questions/new'><button className="ask-button">Ask Question</button></Link>
                        </div>
                        <ul>
                            {notFound}
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