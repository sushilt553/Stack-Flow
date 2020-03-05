import React from 'react';
// import ReactQuill from 'react-quill';
// import { toolbarOptions } from '../../util/quill_toolbar_options';
import { Redirect, withRouter} from 'react-router-dom';

class QuestionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateQuill = this.updateQuill.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    // updateQuill(value) {
    //     this.setState({body: value})
    // }

    componentWillUnmount(){
        this.props.clearQuestionErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        debugger;
        this.props.submitQuestion(this.state)
        .then(() => this.props.history.push("/home"))
    }

    render(){
        const errors = this.props.errors.map((error, index) => <li key={index}>{error}</li>)
        
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title 
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            />
                    </label>

                    <label>Body
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea 
                            value={this.state.body} 
                            cols="30" rows="10" 
                            onChange={this.update('body')}/>
                        {/* <ReactQuill 
                            modules={{toolbar: toolbarOptions}}
                            value={this.state.body}
                            onChange={this.updateQuill}
                        /> */}
                    </label>

                    <label>Tags
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input
                            type="text"
                            value={this.state.tags}
                            onChange={this.update('tags')}
                            placeholder='e.g.(ruby rails jquery'
                            />
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </form>
                <ul>
                    {errors}
                </ul>
            </div>
        )
    }
}

export default withRouter(QuestionForm);