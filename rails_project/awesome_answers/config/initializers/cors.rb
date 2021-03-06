# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:9999', 'localhost:5500' # this origins is kind of like the "whitelist", the domains you allow them to send the requests
    resource(
        '/api/*', # we want them only have the access to localhost:3000/api/something 
        headers: :any, # all the reuquests to contain any headers
        credentials: true, # because we are sending cookies with the requests 
        methods: [:get, :post, :patch, :put, :delete, :options] # allow these http verbs
    )
  end
end