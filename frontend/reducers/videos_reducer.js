import {
    RECEIVE_ALL_VIDEOS, 
    RECEIVE_VIDEO, 
    REMOVE_VIDEO,
    RECEIVE_COMMENT,
} from '../actions/video_actions'


const VideosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            return { [action.video.id]: action.video }
        case REMOVE_VIDEO:
            let nextState = Object.assign({}, state);
            delete nextState[action.videoId]
            return nextState;
        case RECEIVE_COMMENT:
            let newState = Object.assign({}, state);
            // debugger;
            newState[action.comment.video_id].comments[action.comment.id] = action.comment;
            // debugger;
            return newState
        default:
            return state;
    }
};

export default VideosReducer;
