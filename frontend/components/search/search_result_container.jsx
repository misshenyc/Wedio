import { connect } from 'react-redux';
import SearchResults from './search_result';
import { searchVideos } from '../../actions/video_actions';


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

export default connect(msp, mdp)(SearchResults);