import React from 'react';
import Sidebar from '../main/sidebar';
import BlogPage from '../main/blog_page';

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

        if (!this.props.question){
            return null;
        }

        const tagsArr = this.props.question.tags.split(" ")
        const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);

        return(
            <section className="main-show-page">
                <Sidebar />
                <div className="question-show-page">
                    <h2 classNmae="question-title">{this.props.question.title}</h2>
                    <p className="question-body">{this.props.question.body}</p>
                    <ul className="all-tags">
                        {tags}
                    </ul>
                </div>
                <BlogPage />
            </section>
        )
    }
}

export default QuestionDetailsShow;