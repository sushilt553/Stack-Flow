import React from 'react';
import {Link} from 'react-router-dom';


class TagShow extends React.Component{

    componentDidMount(){
        this.props.requestTag(this.props.match.params.tagId)
    }

    render(){
        if (!this.props.questionsObj){
            return null;
        }

        debugger;
        const questions = this.props.questionsObj.map((question) => <Link key={question.id} to={`/questions/${question.id}`}><li>{question.title}</li></Link>)

        return (
            <ul>
                {questions}
            </ul>
        )
    }
}

export default TagShow;