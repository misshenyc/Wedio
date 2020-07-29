class Api::VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @videos = Video.all 
    end

    def show
        @video = Video.find(params[:id])
    end

    def create
        # debugger
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

    private

    def video_params
        params.require(:video).permit(:title, :description, :videoclip)
    end

end
