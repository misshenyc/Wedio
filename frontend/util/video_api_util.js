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
    ;
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

export const likeVideo = (videoId) => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/videos/${videoId}/like`,
    });
}

export const unlikeVideo = (videoId) => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/videos/${videoId}/unlike`,
    });
}

export const dislikeVideo = (videoId) => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/videos/${videoId}/dislike`,
    });
}

export const undislikeVideo = (videoId) => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/videos/${videoId}/undislike`,
    });
}



