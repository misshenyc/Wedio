import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const CREATED_VIDEO = 'CREATED_VIDEO';

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

const removeVideo = video => {
    return {
        type: REMOVE_VIDEO,
        video
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