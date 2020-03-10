class Api::TagsController < ApplicationController

    def index
        @tags = Tag.all
        render :index
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        render :show
    end
end