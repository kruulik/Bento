class Api::ItemsController < ApplicationController
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
    @items = Project.find(params[:project_id]).items
  end

  def destroy
    @item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:project_id, :body)
  end
end
