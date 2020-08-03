
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const createComment = comment => dispatch => {
    return VideoAPIUtil.createComment(comment)
        .then(comment => receiveComment(comment))
}