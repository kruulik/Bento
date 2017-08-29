class Api::CommentsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update]

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show, status: 200
    else
      render json: ['Unable to add comment'], status: 422
    end
  end

  def index
    if params[:project_id]
      @comments = Project.find(params[:project_id]).comments
    else
      @comments = Comment.all
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :project_id)
  end

end
