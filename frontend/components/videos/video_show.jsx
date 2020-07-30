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
                {/* <video className = 'show-video-clip' controls>
                    <source src={video.clipUrl}></source>
                </video> */}
                <video src={video.clipUrl} controls/>
                <br/>
                <span className = 'show-video-title'>{video.title}</span>
                <span className = 'show-video-description'>{video.description}</span>
            </div>
        );
    }
}

export default VideoShow;
