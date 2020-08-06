import { connect } from 'react-redux';
import CurrentUserVideo from './currentuser_video';
import { fetchVideos} from '../../actions/video_actions';


const msp = state => {
    return {
    videos: Object.values(state.entities.videos),
    user: Object.values(state.entities.users)[0]
}};

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(msp, mdp)(CurrentUserVideo);