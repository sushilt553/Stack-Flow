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
        this.props.submitQuestion(this.state)
        .then(() => this.props.history.push("/home"))
    }

    render(){
        const errors = this.props.errors.map((error, index) => <li key={index}>{error}</li>)
        
        return(
            <div className='form-page-container'>
                <h3 className='form-type'>{this.props.formType}</h3>
                <div className='main-container'>
                    <form className='question-form-1' onSubmit={this.handleSubmit}>
                        <section className='question-form'>
                            <label><strong>Title</strong> 
                                <p>Be specific and imagine you're asking a question to another person</p>
                                <input 
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                                    />
                            </label>
                            <label><strong>Body</strong>
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

                            <label><strong>Tags</strong>
                                <p>Add up to 5 tags to describe what your question is about</p>
                                <input
                                    type="text"
                                    value={this.state.tags}
                                    onChange={this.update('tags')}
                                    placeholder='e.g.(ruby rails jquery)'
                                    />
                            </label>
                        </section>
                        <input type="submit" value={this.props.buttonType}/>
                        <ul className="question-errors">
                            {errors}
                        </ul>
                    </form>
                    <section className='main-section'> 
                        <article className="first-par">
                            <p className='first'>Step 1: Draft your question</p>
                            <p className='second'>The community is here to help you with specific coding, algorith, or language problems.nav-page</p>
                            <p className='second'>Avoid asking opinion-based questions.</p>

                            <ol>
                                <li className='topic'>Summarize the problem
                                <ul> 
                                    <li className='lis'>Include details about your goal</li>
                                    <li className='lis'>Describe expected and actual results</li>
                                    <li className='lis'>Include any error messages</li>
                                </ul>
                                </li>
                                <li className='topic'>Describe what you've tried</li>
                                <li className='topic'>Show some code</li>
                            </ol>
                        </article>

                        <a href="#"><section className="second-par">Have a non-programming question?</section></a>
                        <a href="#"><section className="third-par">More helpful links</section></a>
                    </section>
                </div>
            </div>
        )
    }
}

export default withRouter(QuestionForm);