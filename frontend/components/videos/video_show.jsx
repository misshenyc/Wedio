import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video } = this.props;
        if (!video) return null;
        return (
            <div className = 'video-show'>
                <video width='400' controls>
                    <source src={video.clipUrl}></source>
                </video>
                <h1>{video.title}</h1>
                <p>{video.description}</p>
            </div>
        );
    }
}

export default VideoShow;
