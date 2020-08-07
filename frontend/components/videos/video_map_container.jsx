import { connect } from 'react-redux';
import VideoMap from './video_map';
import { fetchVideos,fetchVideo } from '../../actions/video_actions';


const msp = state => {
    return {
        videos: Object.values(state.entities.videos),
    }
};

const mdp = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: (videoId)=> dispatch(fetchVideo(videoId))
    }
};

export default connect(msp, mdp)(VideoMap);