import React from 'react';
import QuestionForm from './question_form';

class EditQuestionForm extends React.Component {

    componentDidMount() {
        this.props.requestQuestion(this.props.match.params.questionId);
    }

    render() {
        const { question, formType, submitQuestion } = this.props;

        if (!question) return null;

        return (
            <QuestionForm 
                question={question}
                formType={formType}
                submitQuestion={submitQuestion}
                errors={this.props.errors}
                clearQuestionErrors={this.props.clearQuestionErrors}
            />
        )
    }
}

export default EditQuestionForm;