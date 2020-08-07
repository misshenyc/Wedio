import React from 'react';

import MarkerManager from '../../util/marker_manager';

class VideoMap extends React.Component{
    componentDidMount(){
        const mapOptions = {
            center: {
                lat: 40.731141,
                lng: -73.997315,
            },
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map)
        // this.props.fetchVideos()
        // this.MarkerManager.updateMarkers(this.props.videos)
    }
    
    render(){
        return(
            <div className='video-map' ref={map => this.mapNode = map}>
                Map
            </div>
        )
    }

}

export default VideoMap;
