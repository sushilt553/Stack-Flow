import React from 'react';

class QuestionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.question;
    }
}

export default QuestionForm;