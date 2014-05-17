class WeightsController < ApplicationController
  respond_to :json


  def index
    @weight = Weight.all
  end

  def create
    respond_with Weight.create(weight_params)
  end

  def update
    @weight = Weight.find(params[:id])
    respond_with @weight.update_attributes(weight_params)
  end

  def destroy
    respond_with Weight.destroy(params[:id])
  end

  def show
    @weight = Weight.find(params[:id])
  end

  private

  def weight_params
    params.require(:weight).permit(:daily_entry_id, :time_weighed, :measured_weight, :diary_average_weight)
  end

end