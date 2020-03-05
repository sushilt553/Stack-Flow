import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionsIndex extends React.Component{

    componentDidMount(){
        this.props.requestAllQuestions();
    }

    render(){

        const questions = this.props.questions.map(question => 
            <QuestionIndexItem
                key={question.id}
                question={question}
                deleteQuestion={this.props.deleteQuestion}
                sessionId={this.props.sessionId} 
              />
        );

        return(
            <div>
                <ul>
                    {questions}
                </ul>
            </div>
        )
    }
}

export default QuestionsIndex;