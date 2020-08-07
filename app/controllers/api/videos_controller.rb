class Api::VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        if params[:query]
            @videos = Video.where('title LIKE ?', "%#{params[:query]}%").includes(:comments)
            # @videos = Video.where('title LIKE ?', "%upstate%").includes(:comments)
        else
            @videos = Video.includes(:comments)
        end
        render :index
    end

    def show
        @video = Video.find(params[:id])
    end

    def create
        
        @video = current_user.videos.new(video_params)
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = current_user.videos.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @videos.errors.full_messages, status: 422
        end
    end 

    def destroy
        @video = current_user.videos.find(params[:id])
        if @video.destroy
            render :show
        else
            render json: @videos.errors.full_messages, status: 422
        end
    end

    def like
        like = Like.new(
            user_id: current_user.id, 
            likeable_id: params[:id], 
            likeable_type: 'Video')
        if like.save!
            render Video.find(params[:id])
        else
            render json: like.errors.full_messages, status: 422
        end
    end

    def unlike
        like = Like.find_by(
            user_id: current_user.id, 
            likeable_id: params[:id], 
            likeable_type: 'Video')
        if like.destroy
            render Video.find(params[:id])
        else
            render json: like.errors.full_messages, status: 422
        end
    end

    def dislike
        dislike = Dislike.new(
            user_id: current_user.id, 
            dislikeable_id: params[:id], 
            dislikeable_type: 'Video')
        if dislike.save!
            render Video.find(params[:id])
        else
            render json: dislike.errors.full_messages, status: 422
        end
    end

    def undislike
        dislike = Dislike.find_by(
            user_id: current_user.id, 
            dislikeable_id: params[:id], 
            dislikeable_type: 'Video')
        if dislike.destroy
            render Video.find(params[:id])
        else
            render json: dislike.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :videoclip)
    end

end
