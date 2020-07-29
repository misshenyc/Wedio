import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {
    // debugger
    return {
    video: state.entities.videos[ownProps.match.params.videoId]
}};

const mdp = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
});

export default connect(msp, mdp)(VideoShow);