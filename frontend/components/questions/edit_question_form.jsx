import React from 'react';
import QuestionForm from './question_form';

class EditQuestionForm extends React.Component {

    componentDidMount() {
        this.props.requestQuestion(this.props.match.params.questionId);
    }

    render() {
        const { question, formType, submitQuestion, errors, clearQuestionErrors } = this.props;

        if (!question) return null;

        return (
            <QuestionForm 
                question={question}
                formType={formType}
                submitQuestion={submitQuestion}
                errors={errors}
                clearQuestionErrors={clearQuestionErrors}
            />
        )
    }
}

export default EditQuestionForm;