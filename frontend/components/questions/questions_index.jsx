import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionsIndex extends React.Component{

    componentDidMount(){
        this.props.requestAllQuestions();
    }

    render(){
        // debugger;
        const questions = this.props.questions.map(question => 
            <QuestionIndexItem
                key={question.id}
                question={question}
                // deleteQuestion={this.props.deleteQuestion}
                // sessionId={this.props.sessionId}
              />
        ).reverse();

        return(
            <div className="main-questions-list">
                {questions}
            </div>
        )
    }
}

export default QuestionsIndex;