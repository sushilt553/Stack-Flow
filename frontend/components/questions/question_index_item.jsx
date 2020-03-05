import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
    return (
        <li>
            {props.question.title}
            <button onClick={() => props.deleteQuestion(props.question.id)}>Delete</button>
            <button><Link to={`/questions/${props.question.id}/edit`}>Edit</Link></button>
        </li>
    )
}

export default QuestionIndexItem;