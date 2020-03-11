class Api::SearchController < ApplicationController

    def search
        tags_arr = params[:tags].split(" ")
        @questions = []

        tags_arr.each do |tag|
            main_tag = Tag.find_by(name: tag)
            if main_tag
                main_tag.questions.each do |question|
                    @questions.push(question)
                end
            end
        end

        render :search
    end
end
