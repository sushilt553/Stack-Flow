class Api::AnswersController < ApplicationController

    def show
        @answer = Answer.find_by(id: params[:id])

        render :show
    end

    def create
        @answer = current_user.answers.new(answer_params)
        @answer.question_id = params[:question_id]

        if @answer.save
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def edit
        @answer = Answer.find_by(id: params[:id])
        if @answer
            render :show
        else
            render json: ["Answer not found"], status: 422
        end
    end

    def update
        @answer = Answer.find_by(id: params[:id])

        if @answer.update_attributes(answer_params)
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.find_by(id: params[:id])

        if @answer
            @answer.destroy
        else
            render json: ["Answer not found"], status: 422
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:body)
    end
end
