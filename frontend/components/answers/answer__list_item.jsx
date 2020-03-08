import React from 'react';
import { Link } from 'react-router-dom';

const AnswerListItem = (props) => {
    let EDButtons;
    if (props.answer.author_id === props.sessionId){
        EDButtons = 
            <>
            <button><Link to={`/answers/${props.answer.id}/edit`}>Edit</Link></button>
            <button onClick={() => props.deleteAnswer(props.answer.id)}>Delete</button>
            </>
    }
    return (
        <li>
            {props.answer.body}
            {EDButtons}
        </li>
    )
}

export default AnswerListItem