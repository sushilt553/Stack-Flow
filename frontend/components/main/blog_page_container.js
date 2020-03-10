import { connect } from 'react-redux';
import BlogPage from './blog_page';

const mapStateToProps = state => {
    return {
        topQuestions: state.entities.topQuestions
    }
}

export default connect(mapStateToProps)(BlogPage)