import React from 'react';
import {Link} from 'react-router-dom';
// import QuestionFormContainer from '../questions/question_form_container';
import QuestionIndexContainer from '../questions/questions_index_container';

class HomePage extends React.Component{

    render(){
        return (
            <div>
                <button><Link to='/questions/new'>Ask Question</Link></button>
                <QuestionIndexContainer />
                {/* <QuestionFormContainer /> */}
            </div>
        )
    }
}

export default HomePage