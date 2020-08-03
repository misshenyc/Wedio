# class Api::LikesController < ApplicationController
#   def create
#     @like = Like.new
#     @like.user_id = current_user.id
#     @like.video_id = params[:id]
#     if @like.save
#       @video = @like.video
#       render 'api/videos/show'
#     else
#       render json: @like.errors.full_messages, status: 401
#     end
#   end

#   def destroy
#     @like = Like.find_by(user_id: current_user.id, video_id: params[:id])
#     @like.destroy
#     @video = @like.video
#     render 'api/videos/show'
#   end
# end