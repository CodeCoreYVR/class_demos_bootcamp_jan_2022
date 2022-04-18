Rails.application.config.middleware.use OmniAuth::Builder do
    provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "read:user, read:email"
end

#Set up your own GitHub Oauth application in GitHub under Developer Settings
#Generate a secret key, and copy your Client id as well
#Create config/initializers/app_keys.rb and enter the Client Key and Secret Key in there
#IMPORTANT: Make sure to put app_keys.rb in .gitignore because you don't want to share your private
#information when you push your code


