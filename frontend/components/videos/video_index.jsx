import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const videoLis = this.props.videos.map(video => {
            return (<li key = {video.id}>
                <video width = '400' controls>
                    <source src = {video.clipUrl}></source>
                </video>
                <br/>
                <Link to={`/videos/${video.id}`}>{video.title}</Link>
                by {video.creator_id}
                details: {video.description}
            </li>
        )})
        // debugger;
        return (
            <div className = 'video-index'>
                {videoLis}
            </div>
        );
    }
}

// TODO: Link to users/userid 

export default VideoIndex;