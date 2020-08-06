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
    
    

    return(
        <div className = 'comment-content'>
            <span className ='comment-body'>{body} by {user_id}</span>
            <div className = 'edit-dropdown'>
                <i className="fas fa-ellipsis-v"></i>
                <div className = 'edit-content'>
                    <div className = 'edit-comment'>
                        <i className="far fa-edit"></i>
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
                    </div>
                    <button 
                        className = 'delete-comment' 
                        onClick = {
                            ()=>deleteComment(comment.id)
                            // .then(() => props.history.push(`/videos/${videoId}`))
                            .then(() => refreshPage())
                            }> 
                        <i className="fas fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CommentShow;