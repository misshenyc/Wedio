import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, updateComment, deleteComment } from '../../actions/comment_actions';

const msp = state => {
    debugger;
    return {
        comments: Object.values(state.entities.comments)
    }
}

const mdp = dispatch => {
    debugger;
    return {
        fetchComments: () => dispatch(fetchComments()),
    }
}


export default connect(msp, mdp)(CommentIndex);

//TODOs: updateComment, deleteComment, like/dislikeComment