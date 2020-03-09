import React from 'react';
import {withRouter} from 'react-router-dom';

class AnswerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.answer;
        // debugger;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger;
        // this.setState({ questionId: this.props.questionId})
        // debugger;
        this.props.submitForm(this.state)
        .then((id)=> this.props.history.push(`/questions/${id}`))
        this.setState({body: ""});
    }

    componentWillUnmount(){
        this.props.clearAnswerErrors();
    }

    render(){
        let formName;
        if (this.props.formType === 'Post Your Answer'){
            formName = 'Your Answer'
        }else{
            formName = 'Edit your answer'
        }

        return(
            <form className="ans-form" onSubmit={this.handleSubmit}>
                <p className="your-ans">{formName}</p>
                <p className="ans-errors">{this.props.errors}</p>
                <textarea 
                cols="30" rows="10" 
                value={this.state.body}
                onChange={this.update("body")}
                />
                <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default withRouter(AnswerForm);