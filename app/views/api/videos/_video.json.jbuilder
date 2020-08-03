json.extract! video, :id, :title, :description, :creator_id



json.likes video.likes.count

json.liked_by_current_user !!video.likes.find_by(user_id: current_user.id)