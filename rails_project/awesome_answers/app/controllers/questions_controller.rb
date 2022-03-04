class QuestionsController < ApplicationController
  # To create this controller:
  # rails g controller questions --no-helper --no-assets
  # if you don't need helper.rb and questions.scss files
  # you can add those options when you run rails g controller
  # If you want to configure it so that these files are not created by default,
  # You can configure it in config/application.rb

  #===========CALLBACKS=============>
  before_action :find_question, only: [:edit, :update, :show, :destroy]

  #============CREATE================>
  def new
    #Because Rails form helper methods need an instance of a model to work, we create a new instance
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      # flash[:notice] = "Question created successfully!"
      redirect_to question_path(@question.id)
    else
      render :new
    end
  end

  #==============READ===================>
  def index
    @questions = Question.order(created_at: :desc)
    #Model.all is a method built into active record used to return all records of that model
    #The @ sign is necessary to make a variable an instance variable
    #You need an instance varibale to make it available to the view pages!!
  end

  def show
  end

  #============UPDATE====================>
  def edit
  end

  def update
    if @question.update(question_params)
      redirect_to question_path(@question.id)
    else
      render :edit
    end
  end

  #=============DELETE===================>

  def destroy
    @question.destroy
    redirect_to questions_path
  end

  private

  def find_question
    @question = Question.find params[:id]
  end

  #As an added layer of protection to our database, 
  #and to prevent malicious SQL injection, we only permit users
  #to inject data for the required params in the form,
  #related to the given model:
  def question_params
    params.require(:question).permit(:title, :body)
    # get the data from the form and add it into DB
    # User the  `require` on the params object to retrieve the nested hash of a key
    # usually corresponding the na-value pairs of a form
    # `permit` to specify all input names are  allowed to submit to the DB
  end
end
