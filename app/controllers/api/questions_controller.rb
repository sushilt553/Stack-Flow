class Api::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        render :index
    end

    def show
        @question = Question.find_by(id: params[:id])
        if @question
            render :show
        else
            render json: ['Question not found'], status: 404
        end
    end

    def edit
        @question = Question.find_by(id: params[:id])
        if @question
            render :show
        else
            render json: ['Question not found'], status: 404
        end
    end

    def update
        @question = current_user.questions.find_by(id: params[:id])

        if @question.update_attributes(question_params)
            old_tags = @question.taggings

            Question.destroy_tags(old_tags)

            tags_arr = params[:question][:tags].split(" ")

            Question.create_tags(tags_arr, @question)
            
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def create

        @question = current_user.questions.new(question_params)

        if @question.save
            tags_arr = params[:question][:tags].split(" ")
            Question.create_tags(tags_arr, @question)
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def destroy
        @question = current_user.questions.find_by(id: params[:id])

        if @question
            @question.destroy
        else
            render json: ['Author can only delete this question'], status: 422
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :body)
    end
end
