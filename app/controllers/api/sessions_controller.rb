class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:password][:password]
        )

        if @user.save
            log_in(@user)
            render :show
        else
            render json: ["Username/Password didn't match"]
        end
    end

    def destroy
        self.log_out
    end
end
