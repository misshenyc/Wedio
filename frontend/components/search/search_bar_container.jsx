import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom'


const msp = state => {
    return {
        videos: Object.values(state.entities.videos),
    }
};

const mdp = dispatch => {
    return {
        searchVideos: (query) => dispatch(searchVideos(query)),
    }
};

export default withRouter(connect(msp, mdp)(SearchBar));