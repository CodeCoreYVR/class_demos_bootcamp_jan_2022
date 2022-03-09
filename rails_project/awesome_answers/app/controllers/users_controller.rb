class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:edit, :update]
    before_action :find_user, only: [:edit, :update]


    def new
        @user = User.new
    end

    def create
        @user = User.new params.require(:user).permit(
            :first_name,:last_name,:email,:password,:password_confirmation
        )
        if @user.save
            session[:user_id] = @user.id
            # your application has a session for each user in which you can store small amounts of data
            # the session is only avaliable in the controller and the view
            flash.notice = "Logged in!"
            redirect_to root_path
        else
            render :new, status: 303
        end
    end

    def edit
    end

    def update
        if @user.update user_params
            flash[notice] = 'Updated Successfully'
            redirect_to root_path
        else
            render :edit
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email)
    end

    def find_user
        @user = User.find params[:id]
    end
end
