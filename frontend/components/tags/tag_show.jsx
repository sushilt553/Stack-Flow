import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../main/sidebar';
import BlogPageContainer from '../main/blog_page_container';
import QuestionIndexItem from '../questions/question_index_item';


class TagShow extends React.Component{

    componentDidUpdate(prevProps) {
        const currentId = this.props.match.params.tagId;
        const prevId = prevProps.match.params.tagId;

        if (currentId != prevId) {
            this.props.requestTag(currentId)
        }
    }

    componentDidMount(){
        this.props.requestTag(this.props.match.params.tagId)
        this.props.requestAllQuestions();
    }

    render(){
        if (!this.props.questionsObj){
            return null;
        }
    
        const questions = this.props.questionsObj.map((question) =>
            <QuestionIndexItem key={question.id}
                question={question}
                updateQuestion={this.props.updateQuestion}
            />
        )

{/* < Link key = { question.id } to = {`/questions/${question.id}`}> <li>{question.title}</li></Link > */}
        return (
            <div className="main-home-page">
                <Sidebar />
                <section className="index-container">
                    <section className="front-page">
                        <div className="block-top">
                            <h2>Questions tagged [{this.props.tagName}]</h2>
                            <button className="ask-button"><Link to='/questions/new'>Ask Question</Link></button>
                        </div>
                        <ul className="main-questions-list">
                            {questions}
                        </ul>
                    </section>
                    <BlogPageContainer />
                </section>
            </div>
        )
    }
}

export default TagShow;