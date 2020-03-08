import React from 'react';
import { Link } from 'react-router-dom';

const AnswerListItem = (props) => {
    let EDButtons;
    if (props.answer.author_id === props.sessionId){
        EDButtons = 
            <>
            <br/>
            <button className="del-edit"><Link to={`/answers/${props.answer.id}/edit`}>Edit</Link></button>
            <button className="del-edit" onClick={() => props.deleteAnswer(props.answer.id)}>Delete</button>
            </>
    }
    return (
        <li className="answer-list-item">
            
            <p>{props.answer.body}</p>
            <section className="ed-p">
                <div className="ed-btns">
                    {EDButtons}
                </div>
                <p className="posted-by">Posted by {props.answer.author_name}</p>
            </section>

        </li>
    )
}

export default AnswerListItem