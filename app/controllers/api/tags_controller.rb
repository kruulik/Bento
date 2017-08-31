class Api::TagsController < ApplicationController
  def index
    if params[:project_id]
      project = Photo.find(params[:project_id])
      @tags = project.tags
    else
      @tags = Tag.all
   end
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def create
    if Tag.find_by(tag: params[:tag][:tag])
      @tag = Tag.find_by(tag: params[:tag][:tag])
      @projectTag = Tagging.new(project_id: params[:tag][:project_id], tag_id: @tag.id)
    else
      @tag = Tag.new(tag: params[:tag][:tag])
      if @tag.save
        @projectTag = Tagging.new(project_id: params[:tag][:project_id], tag_id: @tag.id)
      else
        render json: @tag.errors.full_messages, status: 400
      end
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
  end

  private

  def tag_params
    params.require(:tag).permit(:tag, :project_id)
  end
end
