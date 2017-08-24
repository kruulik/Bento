class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @item = Item.new(item_params)

    if @item.save
      render status: 200
    else
      render json: ['Unable to add item.'], status: 422
    end
  end

  def index
    @items = Item.find(params[:project_id]).items
  end

  private

  def item_params
    params.require(:item).permit(:project_id, :body)
  end
end
