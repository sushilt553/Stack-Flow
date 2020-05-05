import React from 'react';
import {Link} from 'react-router-dom';

const BlogPage = (props) => {
    let topQuestions;
    // debugger
    if (props.topQuestions){
        topQuestions = props.topQuestions.map((topQuestion, idx) => <Link key={idx} to={`/questions/${topQuestion.id}`}><li onClick={() => props.updateQuestion({id: topQuestion.id, views: topQuestion.views + 1, tags: topQuestion.tags})}>{topQuestion.title}</li></Link>)
    }else{
        return null;
    }

    return (
        <section className="side-page">
            <article className="blog-post">
                <h3>Blog</h3>
                <li>You need someone to show you how to teach yourself</li>
                <li>A modern 'Hello, World' program needs more than just code</li>
                <h3>Featured on Meta</h3>
                <li>The Q1 2020 Community Roadmap is on the Blog</li>
                <li>An Update On Creative Commons Licensing</li>
                <li>Our Commitment to responding to Meta and Moderators</li>
                <li>Why is the mission of Meta, as a community?</li>
            </article>

            <div className="top-hot-questions">
                <h3 className="hot-questions">Hot Network Questions</h3>
                {topQuestions}
            </div>

        </section>
    )
}

export default BlogPage;