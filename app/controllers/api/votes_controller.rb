class Api::VotesController < ApplicationController

    def create
        debugger
        @vote = Vote.find_by(voter_id: current_user.id, votable_type: params[:vote][:votable_type], votable_id: params[:vote][:votable_id])

        if @vote
            @vote.update_attributes(vote_params)
            render :show
        else
            @vote = Vote.new(vote_params)
            @vote.voter_id = current_user.id
            if @vote.save
                render :show
            else
                render json: @vote.errors.full_messages, status: 422
            end
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:votable_type, :votable_id, :status)
    end
end
