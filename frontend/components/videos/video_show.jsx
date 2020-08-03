import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video, likeVideo, unlikeVideo } = this.props;
        if (!video) return null;
        let likeText = 'I like this'
        let likeAction = () => likeVideo(video.id);
        if (video.liked_by_current_user) {
            likeText = 'Unlike';
            likeAction = () => unlikeVideo(video.id);
        }
        return (
            <div className = 'video-show'>
                {/* <video className = 'show-video-clip' controls>
                    <source src={video.clipUrl}></source>
                </video> */}
                <video src={video.clipUrl} controls/>
                <br/>
                <span className = 'show-video-title'>{video.title}</span>
                <span className = 'show-video-description'>{video.description}</span>
                <div className = 'video-likes-count'>{video.likes}</div>
                <button onClick = {likeAction}>{likeText}</button>
            </div>
        );
    }
}

export default VideoShow;
