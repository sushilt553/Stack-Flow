import React from 'react';
import AnswerForm from './answer_form';

class EditAnswerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.answer
    }

    componentDidMount(){
        this.props.requestAnswer(this.props.match.params.answerId)
    }

    render(){

        if (!this.props.answer){
            return null;
        }

        const {answer, formType, errors, clearAnswerErrors, submitForm} = this.props;

        return (
            <AnswerForm
                answer={answer}
                formType={formType}
                submitForm={submitForm}
                errors={errors}
                clearAnswerErrors={clearAnswerErrors}
            />
        )
    }
}

export default EditAnswerForm;