import * as CommentAPIUtil from '../util/comment_api_util';
import * as VideoAPIUtil from '../util/video_api_util';
import {fetchVideo} from '../actions/video_actions';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const fetchComments = () => dispatch => {
    return CommentAPIUtil.fetchComments()
        .then(comments => dispatch(receiveComments(comments)));
}

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(() => dispatch(fetchVideo(comment.video_id)));
}

export const deleteComment = commentId => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(()=>dispatch(removeComment(commentId)));
}

export const likeComment = commentId => dispatch => {
    return CommentAPIUtil.likeComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}

export const unlikeComment = commentId => dispatch => {
    return CommentAPIUtil.unlikeComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}

export const dislikeComment = commentId => dispatch => {
    return CommentAPIUtil.dislikeComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}

export const undislikeComment = commentId => dispatch => {
    return CommentAPIUtil.undislikeComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}