import React from 'react';
import { connect } from 'react-redux';
import EditVideo from './edit_video';
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';

class Wrapper extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render(){
        const {video, updateVideo, deleteVideo, history} = this.props
        if (!video) return null;
        return(
            <EditVideo
                video = {video}
                updateVideo = {updateVideo}
                deleteVideo = {deleteVideo}
                history = {history}
            />
        )
    }
}


const msp = (state, ownProps) => {
    
    return {
      video: state.entities.videos[ownProps.match.params.videoId],
    }
};

const mdp = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video))
});

export default connect(msp, mdp)(Wrapper);
