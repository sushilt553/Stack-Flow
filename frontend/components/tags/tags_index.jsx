import React from 'react';


class TagsIndex extends React.Component{
    componentDidMount(){
        this.props.requestAllTags()
    }

    render(){
        debugger
        const tags = this.props.allTags.map((tag) => <li key={tag.id}>{tag.name}</li>)
        return (
            <ul>
                {tags}
            </ul>
        ) 
    }
}

export default TagsIndex;