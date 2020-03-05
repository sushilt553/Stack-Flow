import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionsIndex extends React.Component{

    componentDidMount(){
        debugger
        this.props.requestAllQuestions();
    }

    render(){

        const questions = this.props.questions.map(question => 
            <QuestionIndexItem
                question={question}
                deleteQuestion={this.props.deleteQuestion} 
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