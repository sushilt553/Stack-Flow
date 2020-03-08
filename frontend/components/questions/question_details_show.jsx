import React from 'react';
import Sidebar from '../main/sidebar';
import BlogPage from '../main/blog_page';
import AnswerFormContainer from '../answers/answer_form_container';
import {Link} from 'react-router-dom';
import AnswerListItem from '../answers/answer__list_item';

class QuestionDetailsShow extends React.Component{

    componentDidUpdate(prevProps){
        const currentId = this.props.match.params.questionId;
        const prevId = prevProps.match.params.questionId;

        if (currentId != prevId){
            this.props.requestQuestion(currentId)
        }
    }

    componentDidMount(){
        this.props.requestQuestion(this.props.match.params.questionId)
    }

    render(){
        // debugger;
        if (!this.props.question){
            return null;
        }

        const answersCount = this.props.answersCount ? <p>{this.props.answersCount} Answers</p> : null;
        // debugger;
        const answersList = this.props.answers.map((answer) => 
        <AnswerListItem 
        key={answer.id}
        answer={answer}
        deleteAnswer={this.props.deleteAnswer}
        sessionId={this.props.sessionId}
         />)

        const buttons = (this.props.question.author_id === this.props.sessionId) ?
            <>
                <button className="del-edit"><Link to={`/questions/${this.props.question.id}/edit`}>Edit</Link></button>
                <button className="del-edit" onClick={() => 
                    this.props.deleteQuestion(this.props.question.id)
                    .then(() => this.props.history.push("/home"))}>Delete</button>
            </>
            :
            null;
        // debugger;
        const tagsArr = this.props.question.tags.split(" ")
        const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);

        return(
            <section className="main-show-page">
                <Sidebar />
                <section className='show-sub-section'>
                    <div className='title-top'>
                        <h2 className="question-title">{this.props.question.title}</h2>
                        <button className="ask-button question-list"><Link to='/questions/new'>Ask Question</Link></button>
                    </div>
                    <div className="question-show-page">
                        <div>
                            <p className="question-body">{this.props.question.body}</p>
    
                            {buttons}

                            <ul className="all-tags">
                                <div className="tags-in">
                                 {tags}
                                </div>
                                <p className="posted-by">Posted by {this.props.question.author_name}</p>
                            </ul>
                            <div className="answer-count">{answersCount}</div>
                            <br/>
                            <ul className="answer-list">
                                {answersList}
                            </ul>
                            <AnswerFormContainer questionId={this.props.question.id} />
                        </div>
                        <BlogPage />
                    </div>
                </section>
            </section>
        )
    }
}

export default QuestionDetailsShow;