import React from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.searchVideos(this.props.location.search);
    }

    render() {
        // debugger;
        const videoLis = this.props.videos.map(video => {
            return (<li key={video.id} className='search-video-container'>
                <video controls className='search-video-clip'>
                    <source src={video.clipUrl}></source>
                </video>
                <Link to={`/videos/${video.id}`} className = 'search-video-details'>
                    <p className='search-video-title'>{video.title}</p>
                    <div className = 'search-video-subtitle'>
                        <span className='search-video-creator'>Creator: {video.creator_id}</span>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <p className='search-video-description'>{video.description}</p>
                </Link>
            </li>
            )
        })
        return (
            <div className='search-video'>
                <section className = 'search-filter-container'>
                    <div className = 'search-filter'>
                        <i className="fas fa-sliders-h"></i>
                        <span>  FILTER </span>
                    </div>
                </section>
                <div className='search-video-content'>
                    {videoLis}
                </div>
            </div>
        );
    }
}

export default SearchResults;