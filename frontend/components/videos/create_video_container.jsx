import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateVideo from './create_video';
import { createVideo } from '../../actions/video_actions';


const msp = (state, ownProps ) => {
    return {
        created: state.entities.videos.created,
        video: {
            title: '',
            description: '',
            videoFile: null,
            videoUrl: null,
        },
    };
};

const mdp = dispatch => {
    return { 
        createVideo: video => dispatch(createVideo(video)),
    }
};

export default connect(msp, mdp)(CreateVideo);