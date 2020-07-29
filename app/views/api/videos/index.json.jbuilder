@videos.each do |video|
    json.set! video.id do
        json.partial! 'video', video: video

    end
end
# TODO : json.videoUrl url_for(video.videoclip)'

# TODO:
# json.creator do
#     json.partial! '/api/users/user', user: @video.creator
# end

