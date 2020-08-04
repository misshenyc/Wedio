import {
    RECEIVE_ALL_VIDEOS, 
    RECEIVE_VIDEO, 
    REMOVE_VIDEO,
    RECEIVE_COMMENT,
    RECEIVE_LIKE,
    RECEIVE_DISLIKE,
    RECEIVE_UNDISLIKE,
    RECEIVE_UNLIKE,
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
        case RECEIVE_LIKE:
            let state1 = merge({}, state);
            state1[action.video.id]['liked_by_current_user'] = true;
            state1[action.video.id].likes = action.video.likes;
            return state1;
        case RECEIVE_UNLIKE:
            let state2 = merge({}, state);
            state2[action.video.id]['liked_by_current_user'] = false;
            state2[action.video.id].likes = action.video.likes;
            return state2;
        case RECEIVE_DISLIKE:
            let state3 = merge({}, state);
            state3[action.video.id]['disliked_by_current_user'] = true;
            state3[action.video.id].dislikes = action.video.dislikes;
            return state3;
        case RECEIVE_UNDISLIKE:
            let state4 = merge({}, state);
            state4[action.video.id]['disliked_by_current_user'] = false;
            state4[action.video.id].dislikes = action.video.dislikes;
            return state4;
        default:
            return state;
    }
};

export default VideosReducer;
