class DailyEntriesController < ApplicationController
  respond_to :json


  def index
    @daily_entries = DailyEntry.all
  end

  def create
    respond_with DailyEntry.create(daily_entry_params)
  end

  def update
    @daily_entry = DailyEntry.find(params[:id])
    respond_with @daily_entry.update_attributes(daily_entry_params)
  end

  def destroy
    respond_with DailyEntry.destroy(params[:id])
  end

  def show
    @daily_entry = DailyEntry.find(params[:id])
  end

  private

  def daily_entry_params
    params.require(:daily_entry).permit(:date)
  end

end
