import { connect } from 'react-redux';
import VideoShow from './video_show';
import { 
    fetchVideo, 
    likeVideo, unlikeVideo,
    dislikeVideo, undislikeVideo,
    deleteComment,
} from '../../actions/video_actions';

const msp = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoId],
    }
};

const mdp = dispatch => {
    
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        likeVideo: videoId => dispatch(likeVideo(videoId)),
        unlikeVideo: videoId => dispatch(unlikeVideo(videoId)),
        dislikeVideo: videoId => dispatch(dislikeVideo(videoId)),
        undislikeVideo: videoId => dispatch(undislikeVideo(videoId)),
        deleteComment: commentId => dispatch(deleteComment(comment)),
    }
};

export default connect(msp, mdp)(VideoShow);