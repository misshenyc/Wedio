import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateVideo from './create_video';
import { createVideo } from '../../actions/video_actions';
import {closeCreateModal} from '../../actions/modal_actions'


const msp = (state, ownProps ) => {
    debugger;
    return {
        video: {
            title: '',
            description: '',
            videoFile: null,
            videoUrl: null,
            step: 0,
        },
    };
};

const mdp = dispatch => {
    return { 
        createVideo: video => dispatch(createVideo(video)),
        closeCreateModal: ()=>dispatch(closeCreateModal()),
    }
};

export default connect(msp, mdp)(CreateVideo);