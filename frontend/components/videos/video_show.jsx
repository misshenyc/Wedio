import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    componentDidMount() {
        this.prop.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video } = this.props;

        return (
            <div>
                <h1>{video.title}</h1>
                <p>{video.description}</p>
            </div>
        );
    }
}

export default VideoShow;
