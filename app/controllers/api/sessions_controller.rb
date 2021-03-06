class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            log_in(@user)
            render :show
        else
            render json: ["Username/Password didn't match"], status: 422
        end
    end

    def destroy
        self.log_out
    end
end
