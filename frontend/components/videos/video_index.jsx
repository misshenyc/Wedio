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
                {video.creator_id}
                {video.description}
            </li>
        })
        debugger;
        return (
            <div>
                {videoLis}
            </div>
        );
    }
}

export default VideoIndex;