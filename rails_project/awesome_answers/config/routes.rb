Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # When people type "localhost:3000" 
  # it sends a http get request to this path "localhost:3000", 
  # which is rails' default server when running "rails s"
  # The http get request will be handled by the "WelcomeController" in the "index" action


  #------------------------RESTful Routes----------------------------------------->
  #A RESTful route provides mapping from HTTP verbs (like GET, POST, PATCH, PUT, DELETE)
  #to the contoller CRUD actions (create, read, update, destroy).
  #It depends on the HTTP verb and the URL, and not just solely on the URL

  #RESTful Routes for Questions resource
  #1 index: GET "/resources" - return all records of that resource
  #2 show: GET "/resources/:id" - returns one instance of the resource
  #3 new: GET "/resources/new" - return a view page with form to create a resource
  #4 create: POST "/resources" - handle the submission to the "new form" and inserts a new resource in the db
  #5 edit: GET "/resources/:id/edit" - returns a view form to edit an existing resource
  #6 update: PATCH "/resources/:id" - handle submission of the "edit form" and update the resource with specific id in the db
  #7 destroy: DELETE "/resources/:id" - delete a record with specific id from the database
  #------------------------------------------------------------------------------->

  #======================Questions routes for CRUD actions=======>
  #new
  # get 'questions/new' #, to: 'questions#new -> optional because of RESTful routes following convention
  
  # #create
  # post 'questions', to: 'questions#create', as: :create_question

  # #index
  # get 'questions', to: 'questions#index'
  
  # #show
  # get 'questions/:id', to: 'questions#show', as: :question
  # get('/question/:id') #dynamic id's will replace :id with the number or params given in url

  # #edit
  # get '/questions/:id/edit', to: 'questions#edit', as: :edit_question

  # #update
  # patch 'questions/:id', to: 'questions#update'

  #destroy
  # delete 'questions/:id', to: 'questions#destroy', as: :delete_question

  #===================Questions routes with 'resources' helper==========>
  #resources is another helper from rails
  #because of convention, it is expected that developers want to use CRUD actions
  #on resources, and therefore RESTful routes are set up for all CRUD actions
  #with "resources"
  #instead of individual routes above, you can access all with:
  resources :questions do
    # routes written inside of the block passed a resource method will be prefixed by a path corresponding to the passed in symbol
    # in this case, all the nested routes will be prefixed with '/questions/question_id'

    # post 'questions', to: 'questions#create', as: :create_question
    # /questions method post
    # /questions/:questions_id/answers method post

    resources :answers, only: [:create, :destroy]
    # except: [:show, :new, :edit, :update]
    
    resources :likes, shallow: true, only: [:create, :destroy]

    get :liked, on: :collection
    # above here creates a path: GET "/questions/liked" 
  end
  #:questions referring to the questions controller

  #=================USERS=============>
  resources :users do
    get 'edit_password', to: 'users#edit_password', as: 'edit_password'
    patch 'update_password', to: 'users#update_password', as: 'update_password'
  end
  # /sessions/new
  # /sessions post 
  # /sessions
  # if you dont need the :id in the routes, then use "resource" not "resources"

  resource :sessions, only: [:new, :destroy, :create]

  #========Contacts Page and redirect to Thank you page=========>
  get 'contacts/new', to: 'contacts#new', as: 'contacts_new'
  post 'thank_you', to: 'contacts#create'
  
  #=========Welcome Controller routes===========================>
  # get('/', {to: 'welcome#index'})
  root "welcome#index" #root can be used to indicated the default root page, same as the request above
  get('/welcome', {to: 'welcome#index'})
  get('/goodbye', {to: 'welcome#goodbye', as: :what}) #:as option give you the ability to give an alias to a specific path
  # when directing a route in a view page, you give it a path to access the route: 
  #(see views/layouts/application.html.erb for the navigation paths as examples)
  # goodbye_url => http://localhost:3000/goodbye
  # goodbye path: what_path => /goodbye
  get('/form_example', {to: 'welcome#form_example'})


  #===========JOB POSTS==========>
  resources :job_posts, only: [:new, :create, :show, :index, :destroy, :edit, :update]

  #=============API Routes==============>
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :questions, only: [:create, :index, :show, :update, :destroy]
    end

    #namespace :v2 do
     #resources :whatever
    #end
  end
end
