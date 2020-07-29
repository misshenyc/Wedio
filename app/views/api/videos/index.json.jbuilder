@videos.each do |video|
    # debugger
    json.set! video.id do
        json.partial! 'video', video: video
        json.clipUrl url_for(video.videoclip) 
    end
end

# TODO:
# json.creator do
#     json.partial! '/api/users/user', user: @video.creator
# end

