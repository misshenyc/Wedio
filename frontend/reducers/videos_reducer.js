import {
    RECEIVE_ALL_VIDEOS, 
    RECEIVE_VIDEO, 
    REMOVE_VIDEO,
    RECEIVE_COMMENT,
} from '../actions/video_actions'
import merge from 'lodash/merge';

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
            let newState = merge({},state);
            let video = newState[action.comment.video_id];
            if (video.comments) {
                video.comments[action.comment.id] = action.comment;
            } else {
                video.comments = {
                    [action.comment.id] : action.comment
                };
            }
            return newState;
        default:
            return state;
    }
};

export default VideosReducer;
