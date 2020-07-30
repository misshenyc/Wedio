import {
    RECEIVE_ALL_VIDEOS, 
    RECEIVE_VIDEO, 
    REMOVE_VIDEO,
    CREATED_VIDEO,
} from '../actions/video_actions'


const VideosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            return { [action.video.id]: action.video }
        case CREATED_VIDEO:
            return  { 'created': true }
        case REMOVE_VIDEO:
            let nextState = Object.assign({}, state);
            delete nextState[action.videoId]
            return nextState;
        default:
            return state;
    }
};

export default VideosReducer;
