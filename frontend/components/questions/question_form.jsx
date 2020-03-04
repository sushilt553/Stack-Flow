import React from 'react';

class QuestionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.question;
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value})
    }
}

export default QuestionForm;