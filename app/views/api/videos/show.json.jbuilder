

json.partial! 'video', video: @video


json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end

