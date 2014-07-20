class DiariesController < ApplicationController
    respond_to :json
    before_action :authenticate_user!,
                  :check_if_users_diary, except: [:index, :create]


    def index
      @diaries = current_user.diaries.to_a
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
      params.require(:diary).permit(:name, :user_id)
    end

    def check_if_users_diary
      if current_user != Diary.find(params[:id]).user
        render :status => :unauthorized
      end
    end
end
