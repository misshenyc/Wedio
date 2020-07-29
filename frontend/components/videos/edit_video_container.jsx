import React from 'react';
import { connect } from 'react-redux';
import EditVideo from './edit_video';
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';


const msp = (state, ownProps) => {
    // debugger;
    return {
    video: state.entities.videos[ownProps.match.params.videoId],
    formType: 'Edit Video'
}};

const mdp = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    action: video => dispatch(updateVideo(video))
});

export default connect(msp, mdp)(EditVideo);