import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
    // debugger;
    const ansCount = props.question.answer_ids.length
    const votesCount = props.question.votes_count
    
    const tags = props.question.full_tags.map((tag) => <Link key={tag.id} to={`/tags/${tag.id}`}><li className="tag-list">{tag.name}</li></Link>)

    // const tagsArr = props.question.tags.split(" ")
    // const tags = tagsArr.map((tag, idx) => <li className="tag-list" key={idx} >{tag}</li>);
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
                <label>
                <li className="views-count">{props.question.views}</li>
                views
                </label>
            </section>
            <section className="body-tags">
                <Link onClick={() => props.updateQuestion({id: props.question.id, views: props.question.views + 1, tags: props.question.tags })} className="question-body" to={`/questions/${props.question.id}`} >{props.question.title}</Link>
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