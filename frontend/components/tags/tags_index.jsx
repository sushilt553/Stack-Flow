import React from 'react';
import Sidebar from '../main/sidebar';
import {Link} from 'react-router-dom';

class TagsIndex extends React.Component{
    componentDidMount(){
        this.props.requestAllTags()
    }

    render(){
        // debugger
        const tags = this.props.allTags.map((tag) =>
         <Link key={tag.id} to={`/tags/${tag.id}`}>
             <li>
                 {tag.name}
                 <br/>
                <p>{tag.questions_count} questions</p>
             </li>
        </Link>)
        return (
            <div className="all-tags-index">
                <Sidebar />
                <div className="tags-header">
                    <p className='tag-head'>Tags</p>
                    <p className='tag-p'>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                    <ul className="tags-list-index">
                        {tags}
                    </ul>
                </div>
            </div>
        ) 
    }
}

export default TagsIndex;