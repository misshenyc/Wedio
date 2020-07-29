import React from 'react';
import { connect } from 'react-redux';
import VideoStudio from './video_studio';
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';


class EditVideo extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { action, formType, video } = this.props;
        if (!video) return null;
        return (
            <VideoStudio
                action={action}
                formType={formType}
                video={video} />
        );
    }
}

const msp = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    formType: 'Edit Video'
});

const mdp = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    action: video => dispatch(updateVideo(video))
});

export default connect(msp, mdp)(EditVideo);