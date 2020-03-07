import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
    // debugger;
    const tagsArr = props.question.tags.split(" ")
    const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);
    return (
        <li className="single-question" key={props.question.id}>
            <Link className="question-body" to={`/questions/${props.question.id}`} >{props.question.title}</Link>
            <ul className="all-show-tags">
            <div className="show-tags">
                {tags}
            </div>
            <p className="posted-by">Posted by {props.question.author_name}</p>
            </ul>
        </li>
    )
}

export default QuestionIndexItem;