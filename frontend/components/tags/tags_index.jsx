import React from 'react';
import Sidebar from '../main/sidebar';
import {Link} from 'react-router-dom';

class TagsIndex extends React.Component{
    componentDidMount(){
        this.props.requestAllTags()
    }

    render(){
        // debugger
        const tags = this.props.allTags.map((tag) => <Link key={tag.id} to={`/tags/${tag.id}`}><li>{tag.name}</li></Link>)
        return (
            <div className="all-tags-index">
                <Sidebar />
                <ul className="tags-list-index">
                    {tags}
                </ul>
            </div>
        ) 
    }
}

export default TagsIndex;