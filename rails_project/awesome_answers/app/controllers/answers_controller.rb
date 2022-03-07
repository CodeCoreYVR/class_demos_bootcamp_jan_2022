class AnswersController < ApplicationController
    before_action :find_question
    # create destroy
    def create
        @answer = Answer.new(params.require(:answer).permit(:body))
        @answer.question = @question;
        if @answer.save
            redirect_to question_path(@question.id), status: 303
        else
            # if we use redirect it will go to the show action of the questions controller
            # => generate a new empty @answer variable
            # but what we want here is to display the error messages of this current @answer, not a new one,
            # so we have to use render to "re display" the page
            # however, for the show page, it requires 3 variables => @question, @answers, @answer
            # so we have to also provide the @answers variable
            @answers = @question.answers
            render '/questions/show', status: 303
        end
        
    end
    
    def destroy
        @answer = Answer.find params[:id]
        @answer.destroy
        redirect_to question_path(@question.id), status: 303
    end


    private

    def find_question
        @question = Question.find params[:question_id]
    end
    
    
end
