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
                    <p className = 'index-video-creator'>
                        {video.creator.first_name} &nbsp; {video.creator.last_name}
                    </p>
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
                        <a href="mailto: misshenyc@gmail.com">
                            <button className="subscribe-button">SUBSCRIBED</button>
                            <button className="notifi-button" aria-label="Enable Notifications">
                                <i className="fas fa-bell" aria-hidden="true"></i>
                            </button>
                        </a>
                    </div>        
                </section>

                <nav className="channel-nav">
                    <div className="container">
                        <ul>
                            <li className="nav-item">
                                <a href = '#'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.youtube.com/user/milliewastaken">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.youtube.com/user/milliewastaken">Playlists</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.youtube.com/user/milliewastaken">Community</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.youtube.com/user/milliewastaken/">Channels</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.youtube.com/user/milliewastaken">About</a>
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