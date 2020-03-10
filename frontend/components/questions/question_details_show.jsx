import React from 'react';
import Sidebar from '../main/sidebar';
import BlogPageContainer from '../main/blog_page_container';
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
        const answersList = this.props.answers.map((answer,idx) => 
        <AnswerListItem 
        key={idx}
        answer={answer}
        deleteAnswer={this.props.deleteAnswer}
        answerVote={this.props.answerVote}
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

        const tags = this.props.question.full_tags.map((tag) => <Link key={tag.id} to={`/tags/${tag.id}`}><li className="tag-list">{tag.name}</li></Link>)
        // debugger;
        // const tagsArr = this.props.question.tags.split(" ")
        // const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);

        return(
            <section className="main-show-page">
                <Sidebar />
                <section className='show-sub-section'>
                    <div className='title-top'>
                        <h2 className="question-title">{this.props.question.title}</h2>
                        <button className="ask-button question-list"><Link to='/questions/new'>Ask Question</Link></button>
                    </div>
                    <div className="question-show-page">
                        <div className="min-question-show-page">
                            <div>
                                <div className="votes-icons-container">
                                    <div className="votes-icons">
                                        <button onClick={() => this.props.questionVote({votable_type: 'Question', votable_id: this.props.question.id, status: true})}><i className="fas fa-caret-up"></i></button>
                                        <p>{this.props.question.votes_count}</p>
                                        <button onClick={() => this.props.questionVote({ votable_type: 'Question', votable_id: this.props.question.id, status: false })}><i className="fas fa-caret-down"></i></button>
                                    </div>
                                    <p className="question-body">{this.props.question.body}</p>
                                </div>
                                <div>

                                    {buttons}

                                    <ul className="all-tags">
                                        <div className="tags-in">
                                            {tags}
                                        </div>
                                        <p className="posted-by">Posted by {this.props.question.author_name}</p>
                                    </ul>
                                </div>
                            </div>

                            <div className="body-div">
                                
                                <div className="answer-count">{answersCount}</div>
                                <br/>
                                <ul className="answer-list">
                                    {answersList}
                                </ul>
                                <AnswerFormContainer questionId={this.props.question.id} />
                            </div>
                        </div>
                        <BlogPageContainer />
                    </div>
                </section>
            </section>
        )
    }
}

export default QuestionDetailsShow;