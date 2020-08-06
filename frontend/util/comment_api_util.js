export const createComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments/`,
        data: { comment }
    })
}

export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments/`
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`,
    })
}

export const likeComment = (commentId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments/${commentId}/like`,
    });
}

export const unlikeComment = (commentId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments/${commentId}/unlike`,
    });
}

export const dislikeComment = (commentId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments/${commentId}/dislike`,
    });
}

export const undislikeComment = (commentId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments/${commentId}/undislike`,
    });
}