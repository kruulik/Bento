class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update]

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render status: 200
    else
      render json: ['Unable to add comment'], status: 422
    end
  end

  def index
    @comments = Project.find(prams[:project_id]).comments
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
