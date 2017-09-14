class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @project = Project.new(project_params)
    @project.owners = current_user.id

    if @project.save
      render :show, status: 201
    else
      render json: ['Unable to create project.'], status: 422
    end
  end

  def destroy
    @project.destroy
  end

  def show
  end

  def index
    @projects = Project.all
  end

  private

  def project_params
    params.require(:project).permit(:title, :items, :owners)
  end
end
