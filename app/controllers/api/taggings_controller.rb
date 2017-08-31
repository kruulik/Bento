class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
    else
      render json: @tagging.errors.full_messages, status: 400
    end
  end

  def destory
    @tagging = Tagging.find(params[:id])
    @tagging.destroy
  end

  private

  def tagging_params
    params.require(:tagging).permit(:project_id, :tag_id)
  end
end
