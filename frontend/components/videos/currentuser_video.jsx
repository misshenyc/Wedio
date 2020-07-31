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
            <div className = 'user-video'>

                <section className = 'channel-banner'/>

                <section className = 'channel-info'>
                    <img id='profile' src={window.profile} />
                    <div className='channel-title'>
                        <h1>Earth Explorer <i className="fas fa-check-circle fa sm" ></i></h1> 
                        <div className="channel-subscribers">1,234,567 subscribers</div>        
                    </div>  
                    <div className="channel-subscribe">
                        <button className="subscribe-button">SUBSCRIBED</button>
                        <button className="notifi-button" aria-label="Enable Notifications"><i className="fas fa-bell" aria-hidden="true"></i></button>
                    </div>        
                </section>

                <nav class="channel-nav">
                    <div class="container">
                        <ul>
                            <li class="nav-item">
                                <a href="#" class="current">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Videos</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Playlists</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Community</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Channels</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>



                <div className = 'index-video-content'>
                    {videoLis}
                </div>
            </div>
        );
    }
}


export default CurrentUserVideo;