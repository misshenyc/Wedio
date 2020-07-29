import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoStudio from './video_studio';
import { createVideo } from '../../actions/video_actions';


const msp = state => ({
    video: {
        title: '',
        description: ''
    },
    formType: 'New Video'
});

const mdp = dispatch => ({
    action: video => dispatch(createVideo(video))
});

export default connect(msp, mdp)(VideoStudio);