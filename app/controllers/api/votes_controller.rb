class Api::VotesController < ApplicationController

    def create
        @vote = Vote.new(vote_params)
        @vote.voter_id = current_user.id

        if @vote.save
            render :show
        else
            render json: ['Cannot vote multiple times'], status: 422
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:votable_type, :votable_id, :status)
    end
end
