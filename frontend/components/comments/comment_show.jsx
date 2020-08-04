import React from 'react';
import CommentEditLink from '../../util/link_util';
import CommentEditContainer from './comment_edit_container';
import { ProtectedRoute } from '../../util/route_util';


const CommentShow = ({comment,videoId, editComment}) => {
    const {body, user_id} = comment
    return(
        <div>
            {body} by {user_id}
            <CommentEditLink
                component={CommentEditContainer}
                to={`/videos/${videoId}/comment/${comment.id}/edit`}
                label="Edit"
            />
            <ProtectedRoute
                path="/videos/:videoId/comment/:commentId/edit"
                component={CommentEditContainer}
            />
        </div>
    )
}

export default CommentShow;