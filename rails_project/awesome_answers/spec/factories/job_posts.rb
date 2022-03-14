FactoryBot.define do
  RANDOM_100_CHARS = "hello world hello world hello world hello world hello world hello world hello world hello hello worl hello world hello world"
  factory :job_post do
    sequence(:title) { |n| Faker::Job.title + " #{n}" }
    #sequence is a method provided by factory-bot which accepts a lambda injecting a variable n. n is usually a number that factory-bot increments on every object it generates so we can use it to make sure all instances created are unique
    description { Faker::Job.field + "-#{RANDOM_100_CHARS}"}
    # All objects created using Factories should be valid objects. In this case, we're adding 100 characters to the description of any job_post to make sure it passes the description length validation
    company_name { Faker::Company.name}
    min_salary { rand( 80_000..200_000)}
    max_salary { rand(200_000..400_000)}
    location{ Faker::Address.city}    
    association(:user, factory: :user)
    # telling the factory bot to generate the user first and then set up the relation for job_post
  end

  #FactoryBot.create(:job_post) #Will create the object and save it to the db
  #FactoryBot.build(:job_post) #Will create the object like .new but not save it to the db
  #FactoryBot.attributes_for(:job_post) #Will generate only attributes for job_post
end

