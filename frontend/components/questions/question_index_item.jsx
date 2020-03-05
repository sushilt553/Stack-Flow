import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
   const buttons = (props.question.author_id === props.sessionId) ?
        <>
            <button onClick={() => props.deleteQuestion(props.question.id)}>Delete</button>
            <button><Link to={`/questions/${props.question.id}/edit`}>Edit</Link></button>
        </>
        :
        null;
    
    return (
        <li class="single-question" key={props.question.id}>
            <Link class="question-body" to={`/questions/${props.question.id}`} >{props.question.title}</Link>
            {buttons}
        </li>
    )
}

export default QuestionIndexItem;