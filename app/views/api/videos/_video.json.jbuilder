json.extract! video, :id, :title, :description, :creator_id

if current_user.present?
    json.likes video.likes.count
    json.liked_by_current_user !!video.likes.find_by(user_id: current_user.id)

    json.dislikes video.dislikes.count
    json.disliked_by_current_user !!video.dislikes.find_by(user_id: current_user.id)
end

json.creator video.creator 
