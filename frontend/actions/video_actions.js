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

export const likeVideo = videoId => dispatch => {
    // debugger
    return VideoAPIUtil.likeVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}

export const unlikeVideo = videoId => dispatch => {
    // debugger
    return VideoAPIUtil.unlikeVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}

export const dislikeVideo = videoId => dispatch => {
    return VideoAPIUtil.dislikeVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}

export const undislikeVideo = videoId => dispatch => {
    return VideoAPIUtil.undislikeVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}


// comments
import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment,
    }
}

