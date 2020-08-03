
export const CREATE_COMMENT = 'CREATE_COMMENT'

const receiveComment = comment => {
    return {
        type: CREATE_COMMENT,
        comment
    }
}

export const createComment = comment => dispatch => {
    return VideoAPIUtil.createComment(comment)
        .then(comment => receiveComment(comment))
}