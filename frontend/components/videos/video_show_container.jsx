import { connect } from 'react-redux';
import VideoShow from './video_show';
import { 
    fetchVideo, 
    likeVideo, unlikeVideo,
    dislikeVideo, undislikeVideo 
} from '../../actions/video_actions';

const msp = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoId],
    }
};

const mdp = dispatch => {
    // debugger
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        likeVideo: videoId => dispatch(likeVideo(videoId)),
        unlikeVideo: videoId => dispatch(unlikeVideo(videoId)),
        dislikeVideo: videoId => dispatch(dislikeVideo(videoId)),
        undislikeVideo: videoId => dispatch(undislikeVideo(videoId)),
    }
};

export default connect(msp, mdp)(VideoShow);