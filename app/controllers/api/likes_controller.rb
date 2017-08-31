class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: like_params[:user_id],
                         project_id: like_params[:project_id])
    @like.destroy
    render json: @like
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :project_id)
  end
end
