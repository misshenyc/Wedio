@videos.each do |video|
    # debugger
    json.set! video.id do
        json.partial! 'video', video: video
        json.clipUrl url_for(video.videoclip) 
    end
end



