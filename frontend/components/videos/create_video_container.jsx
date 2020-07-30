import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateVideo from './create_video';
import { createVideo } from '../../actions/video_actions';


const msp = state => {
    // debugger
    return {
    video: {
        title: '',
        description: '',
        videoFile: null,
        videoUrl: null,
    },
}};

const mdp = dispatch => {
    // debugger
    return { createVideo: video => dispatch(createVideo(video))}
};

export default connect(msp, mdp)(CreateVideo);