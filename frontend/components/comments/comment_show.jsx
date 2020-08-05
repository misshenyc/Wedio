import React from 'react';
import CommentEditLink from '../../util/link_util';
import CommentEditContainer from './comment_edit_container';
import { ProtectedRoute } from '../../util/route_util';

const CommentShow = (props) => {
    const { comment, videoId, deleteComment } = props;
    const {body, user_id} = comment;

    const refreshPage = () => {
        window.location.reload(false);
    }
    // debugger
    return(
        <div>
            {body} by {user_id}
            <CommentEditLink
                component={CommentEditContainer}
                to={`/videos/${videoId}/comment/${comment.id}/edit`}
                label="Edit"
                className = 'edit-comment'
            />
            <ProtectedRoute
                path="/videos/:videoId/comment/:commentId/edit"
                component={CommentEditContainer}
            />
            <button className = 'delete-comment' onClick = {
                ()=>deleteComment(comment.id)
                // .then(() => props.history.push(`/videos/${videoId}`))
                .then(() => refreshPage())
            }> Delete </button>
        </div>
    )
}

export default CommentShow;