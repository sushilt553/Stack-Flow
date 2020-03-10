import React from 'react';
import { Link } from 'react-router-dom';

const AnswerListItem = (props) => {
    let EDButtons;

    if (!props.answer){
        return null;
    }

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
            <div className="votes-icons-container">
                <div className="votes-icons">
                    <button onClick={() => props.answerVote({votable_type: 'Answer', votable_id: props.answer.id, status: true})}><i className="fas fa-caret-up"></i></button>
                    <p>{props.answer.votes_count}</p>
                    <button onClick={() => props.answerVote({ votable_type: 'Answer', votable_id: props.answer.id, status: false })}><i className="fas fa-caret-down"></i></button>
                </div>
                <p className='ans-body'>{props.answer.body}</p>
            </div>
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