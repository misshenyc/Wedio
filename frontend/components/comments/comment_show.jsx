import React from 'react';

const CommentShow = ({comment}) => {
    const {body, user_id} = comment
    return(
        <div>
            {body} by {user_id}
        </div>
    )
}

export default CommentShow;