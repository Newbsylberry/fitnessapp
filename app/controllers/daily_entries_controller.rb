class DailyEntriesController < ApplicationController
  before_action :authenticate_user!,
                :check_if_users_entries
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
    @diary = Diary.find_by_name(@daily_entry.diary.name)
  end

  private

  def daily_entry_params
    params.require(:daily_entry).permit(:date, :diary_id, :daily_description)
  end

  def check_if_users_entries
    if current_user != DailyEntry.find(params[:id]).diary.user
      render :status => :unauthorized
    end
  end

end
