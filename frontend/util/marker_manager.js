class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(videos){
        const videosObj = {};
        videos.forEach(video=> videosObj[videos.id] = video);
        videos
            .filter(video => !this.markers[video.id])
            .forEach(newVideo => this.createMarkerFromVideo(newVideo, this.handleClick))
    }

    createMarkerFromVideo(video){
        const position = new google.maps.LatLng(video.lat, videos.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            videoId: video.id,
        });
        this.markers[marker.videoId] = marker;
    }

}

export default MarkerManager