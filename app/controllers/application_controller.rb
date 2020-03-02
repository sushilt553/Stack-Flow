class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def log_in(user)
        session_token= user.reset_session_token!
        session[:session_token] = session_token
    end

    def log_out
        current_user.reset_session_token
        session[:session_token] = nil
    end

end
