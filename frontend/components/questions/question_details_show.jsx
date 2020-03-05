import React from 'react';

class QuestionDetailsShow extends React.Component{

    componentDidUpdate(prevProps){
        const currentId = this.props.match.params.questionId;
        const prevId = prevProps.match.params.questionId;

        if (currentId != prevId){
            this.props.requestQuestion(currentId)
        }
    }

    componentDidMount(){
        this.props.requestQuestion(this.props.match.params.questionId)
    }

    render(){

        if (!this.props.question){
            return null;
        }

        return(
            <div>
                {this.props.question.body}
            </div>
        )
    }
}

export default QuestionDetailsShow;