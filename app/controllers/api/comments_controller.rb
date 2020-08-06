class Api::CommentsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :delete]

    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    def destroy
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    # def like
    #     like = Like.new(
    #         user_id: current_user.id, 
    #         likeable_id: params[:id], 
    #         likeable_type: 'Comment')
    #     if like.save!
    #         render current_user.comments.find(params[:id])
    #     else
    #         render json: like.errors.full_messages, status: 422
    #     end
    # end

    # def unlike
    #     like = Like.find_by(
    #         user_id: current_user.id, 
    #         likeable_id: params[:id], 
    #         likeable_type: 'Comment')
    #     if like.destroy
    #         render current_user.comments.find(params[:id])
    #     else
    #         render json: like.errors.full_messages, status: 422
    #     end
    # end

    # def dislike
    #     dislike = Dislike.new(
    #         user_id: current_user.id, 
    #         dislikeable_id: params[:id], 
    #         dislikeable_type: 'Comment')
    #     if dislike.save!
    #         render current_user.comments.find(params[:id])
    #     else
    #         render json: dislike.errors.full_messages, status: 422
    #     end
    # end

    # def undislike
    #     dislike = Dislike.find_by(
    #         user_id: current_user.id, 
    #         dislikeable_id: params[:id], 
    #         dislikeable_type: 'Comment')
    #     if dislike.destroy
    #         render current_user.comments.find(params[:id])
    #     else
    #         render json: dislike.errors.full_messages, status: 422
    #     end
    # end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id, :parent_comment_id)
    end


end