import React from 'react';
import { Link } from 'react-router-dom';

class CurrentUserVideo extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const currentuserVideos = this.props.videos.filter(video => video.creator_id === this.props.user.id)
        
        const videoLis = currentuserVideos.map(video => {
            return (<li key = {video.id} className = 'index-video-container'>
                <video controls className = 'index-video-clip'>
                    <source src = {video.clipUrl}></source>
                </video>
                <br/>
                <Link to={`/videos/${video.id}`}>
                    <p className = 'index-video-title'>{video.title}</p>
                    <p className = 'index-video-creator'>{video.creator_id}</p>
                </Link>
            </li>
        )})
        ;
        return (
            <div className = 'index-video'>
                <span className='recommended-text'> Your Videos </span>
                <div className = 'index-video-content'>
                    {videoLis}
                </div>
            </div>
        );
    }
}


export default CurrentUserVideo;