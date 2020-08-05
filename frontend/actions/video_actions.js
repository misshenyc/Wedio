import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const CREATED_VIDEO = 'CREATED_VIDEO';

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos,
    }
}

export const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video,
    }
}

const removeVideo = videoId => {
    return {
        type: REMOVE_VIDEO,
        videoId
    }
}

export const fetchVideos = () => dispatch => {
    VideoAPIUtil.fetchVideos()
        .then(videos => {
            dispatch(receiveAllVideos(videos))
        })    
}

export const fetchVideo = videoId => dispatch => {
    return VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        // .then(video => dispatch(receiveVideo(video)))
}

export const updateVideo = video => dispatch => (
    VideoAPIUtil.updateVideo(video)
        .then(video => dispatch(receiveVideo(video)))
);

export const deleteVideo = videoId => dispatch => (
    VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
);



// LIKE & DISLIKES

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_UNLIKE = 'RECEIVE_UNLIKE';
export const RECEIVE_DISLIKE = 'RECEIVE_DISLIKE';
export const RECEIVE_UNDISLIKE = 'RECEIVE_UNDISLIKE';

const receiveLike = (video) => {
    return {
        type: RECEIVE_LIKE,
        video,
    }
}

export const likeVideo = videoId => dispatch => {
    
    return VideoAPIUtil.likeVideo(videoId)
        .then((video) => dispatch(receiveLike(video)))
}

const receiveUnlike = (video) => {
    return {
        type: RECEIVE_UNLIKE,
        video,
    }
}

export const unlikeVideo = videoId => dispatch => {
    
    return VideoAPIUtil.unlikeVideo(videoId)
        .then((video) => dispatch(receiveUnlike(video)))
}

const receivedislike = (video) => {
    return {
        type: RECEIVE_DISLIKE,
        video,
    }
}

export const dislikeVideo = videoId => dispatch => {
    return VideoAPIUtil.dislikeVideo(videoId)
        .then((video) => dispatch(receivedislike(video)))
}

const receiveundislike = (video) => {
    return {
        type: RECEIVE_UNDISLIKE,
        video,
    }
}

export const undislikeVideo = videoId => dispatch => {
    return VideoAPIUtil.undislikeVideo(videoId)
        .then((video) => dispatch(receiveundislike(video)))
}



//COMMENTS

import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment,
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId,
    }
}

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
}

export const editComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
}

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then((commentId) => dispatch(removeComment(commentId)));
}


//SEARCH

export const searchVideos = (query) => dispatch => {
    debugger
    return VideoAPIUtil.searchVideos(query)
        .then(videos => {
            dispatch(receiveAllVideos(videos))
        })
}
