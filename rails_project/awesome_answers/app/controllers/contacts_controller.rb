class ContactsController < ApplicationController
  def new
  end

  def create
    @name=params[:name]
    @email=params[:email]
    @message=params[:message]
    render status: 303
    #need the above render because following a form submission will give a status 200, 
    #which normally indicates a GET method and not a POST method. 
    #Rails 7 ships with Turbo. It expects a form submission to be followed by a 303 code redirect, 
    #one exception to this being when you need to render validation errors.
    #See docs here: https://guides.rubyonrails.org/layouts_and_rendering.html
    #More info: https://turbo.hotwired.dev/handbook/introduction
  end
end
