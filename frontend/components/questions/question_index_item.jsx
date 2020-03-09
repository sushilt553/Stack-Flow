import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
    // debugger;
    const ansCount = props.question.answer_ids.length
    const votesCount = props.question.votes_count
    const tagsArr = props.question.tags.split(" ")
    const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);
    return (
        <li className="single-question" key={props.question.id}>
            <section className="votes-ans-count">
                <label>
                <li className="votes-count">{votesCount}</li>
                votes
                </label>
                <label>
                <li className="ans-count">{ansCount}</li>
                answers
                </label>
            </section>
            <section className="body-tags">
                <Link className="question-body" to={`/questions/${props.question.id}`} >{props.question.title}</Link>
                <ul className="all-show-tags">
                    <div className="show-tags">
                        {tags}
                    </div>
                    <p className="posted-by">Posted by {props.question.author_name}</p>
                </ul>
            </section>
        </li>
    )
}

export default QuestionIndexItem;