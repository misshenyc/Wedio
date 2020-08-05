import React from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
    componentDidMount() {
        debugger;
        this.props.searchVideos(this.props.location.search);
    }

    render() {
        // debugger;
        const videoLis = this.props.videos.map(video => {
            return (<li key={video.id} className='search-video-container'>
                <video controls className='search-video-clip'>
                    <source src={video.clipUrl}></source>
                </video>
                <br />
                <Link to={`/videos/${video.id}`}>
                    <p className='search-video-title'>{video.title}</p>
                    <p className='search-video-creator'>{video.creator_id}</p>
                </Link>
            </li>
            )
        })
        return (
            <div className='search-video'>
                <span className='recommended-text'> Recommended </span>
                <div className='search-video-content'>
                    {videoLis}
                </div>
            </div>
        );
    }
}

export default SearchResults;