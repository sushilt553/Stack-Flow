import React from 'react';

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
        this.props.submitForm(this.state);
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>Your Answer
                    <textarea 
                    cols="30" rows="10" 
                    value={this.state.body}
                    onChange={this.update("body")}
                     />
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default AnswerForm;