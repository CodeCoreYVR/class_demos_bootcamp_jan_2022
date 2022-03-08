class ApplicationController < ActionController::Base
    # we create this method in ApplicationController because we will use it in some other controllers
    # and all the other controllers inherit from this ApplicationController, so we just need to 
    # define the method one time in this ApplicationController. 
    def authenticate_user!
        # check if the user is signed in or not
        # if not then redirect the user to the sign in page
        # otherwise dont do anything
        if !user_signed_in?
            flash.notice = "Please sign in first!"
            redirect_to new_sessions_path
        end
    end
    

    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?
    #  the helper_method is for sharing methods defined inside the controllers to make them avaliable for 
    # the view. this is used for any method that you need to asscess from both controllers and views
    
    def current_user
        @current_user ||= User.find_by_id session[:user_id]
    end
    helper_method :current_user
end
