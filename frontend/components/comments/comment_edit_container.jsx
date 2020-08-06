import {connect} from 'react-redux';

import {editComment} from '../../actions/video_actions';
import CommentEdit from './comment_edit';

const msp = (state,ownProps) => {
    return {
        comment: state.entities.videos[ownProps.match.params.videoId]
                    .comments[ownProps.match.params.commentId]
    }
}

const mdp = dispatch => {
    return {
        editComment: comment => dispatch(editComment(comment))
    };
}

export default connect(msp, mdp)(CommentEdit)
