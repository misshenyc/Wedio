json.extract! comment, :id, :body, :parent_comment_id, :video_id, :user_id

json.likes comment.likes.count
json.liked_by_current_user !!comment.likes.find_by(user_id: current_user.id)

json.dislikes comment.dislikes.count
json.disliked_by_current_user !!comment.dislikes.find_by(user_id: current_user.id)