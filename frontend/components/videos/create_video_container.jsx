import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateVideo from './create_video';
import { createVideo } from '../../actions/video_actions';


const msp = state => {
    // debugger
    return {
    video: {
        title: '',
        description: ''
    },
    formType: 'Create Video'
}};

const mdp = dispatch => {
    // debugger
    return { action: video => dispatch(createVideo(video))}
};

export default connect(msp, mdp)(CreateVideo);