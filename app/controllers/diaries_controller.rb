class DiariesController < ApplicationController  
    respond_to :json


    def index
      @diaries = Diary.all
    end

    def create
      respond_with Diary.create(diary_params)
    end

    def update
      @diary = Diary.find(params[:id])
      respond_with @diary.update_attributes(diary_params)
    end

    def destroy
      respond_with Diary.destroy(params[:id])
    end

    def show
      @diary = Diary.find(params[:id])
    end

    private

    def diary_params
      params.require(:diary).permit(:name)
    end
end
