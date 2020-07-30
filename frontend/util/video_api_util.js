import { $CombinedState } from "redux"

export const fetchVideos = () => {
    return $.ajax({
        url: '/api/videos'
    })
}

export const fetchVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`
    })
}

export const createVideo = (video) => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/videos/`,
        data: video,
        contentType: false,
        processData: false,
    })
}

export const updateVideo = (video) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}`,
        data: { video }
    })
}

export const deleteVideo = (videoId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`,
    })
}


