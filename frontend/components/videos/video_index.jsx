import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const videoLis = this.props.videos.map(video => {
            return <li key = {video.id}>
                <Link to={`/videos/${video.id}`}>{video.title}</Link>
                by {video.creator_id}
                details: {video.description}
                {video.clipUrl}
            </li>
        })
        // debugger;
        return (
            <div className = 'video-index'>
                {videoLis}
            </div>
        );
    }
}

// TODO: add video clip tag once clip url works: 
{/* <video width="400" controls>
    <source src="mov_bbb.mp4" type="video/mp4">
    Your browser does not support HTML video.
</video> */}

export default VideoIndex;