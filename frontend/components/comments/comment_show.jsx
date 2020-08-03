import React from 'react';

const CommentShow = (comment) => {
    const {body} = comment;
    return (
        <div>
            {body} by {comment.user_id}
        </div>
    )
}

export default CommentShow;