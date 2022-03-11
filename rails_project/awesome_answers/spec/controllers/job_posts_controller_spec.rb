require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        it "requires a render of a new template" do
            #GIVEN
            #In render there's not really a given
            #The given is that the action is triggered

            #WHEN
            get(:new)
            #We have this get method available from rails-controller-testing gem
            #In the backend it simulates/mocks the behaviour of sending an http get request
        
            #THEN
            expect(response).to(render_template(:new))
            #response is an object that represents the HTTP-response

        end

        it "requires setting an instance variable with a new job post" do
            #GIVEN
            #The given is that the action is triggered

            #WHEN
            get(:new)
        
            #THEN
            #assigns(:job_post) is available from the gem rails-controller-testing
            #it allows you to grab an instance variable, and it takes a symbol (:job_post)
            #All the models are available to the controller
            expect(assigns(:job_post)).to(be_a_new(JobPost))
            #We check that the instance variable @job_post is a new instance of the model JobPost
        end

    end

    describe "#create" do
        context "with valid parameters" do
            def valid_request
                post(:create, params: { job_post: 
                    FactoryBot.attributes_for(:job_post)
                })
            end

            it "requires a new creation of job post in the database" do
                #GIVEN
                count_before = JobPost.count #the number of all records in the JobPost table

                #WHEN
                valid_request #mocking a post request to the create method with valid params

                #THEN
                count_after = JobPost.count
                expect(count_after).to(eq(count_before + 1))
                # eq is an assertion provided by Rspec that checks the value to the right of the .to is equal to the paramater passed in to the method.
            end

            it "requires a redirect to the show page for the new job post" do
                #GIVEN
                #we are creating a new job post

                #WHEN
                valid_request #mocking a post request to the create method with valid params

                #THEN
                job_post = JobPost.last
                expect(response).to(redirect_to(job_post_path(job_post.id)))
            end
        end

        context "with invalid parameters" do
            def invalid_request
                post(:create, params: { job_post: 
                    FactoryBot.attributes_for(:job_post, title:nil)
                })
            end

            it "requires that the database does not save the new record of job post" do
            #GIVEN
            count_before = JobPost.count #the number of all records in the JobPost table

            #WHEN
            invalid_request #mocking a post request to the create method with invalid params

            #THEN
            count_after = JobPost.count
            expect(count_after).to(eq(count_before))
            #eq is an assertion provided by Rspec that checks the value to the right of the .to is equal to the paramater passed in to the method.
            end

            it "requires a render of the new job post template" do
                #GIVEN
                #on new template creating a new record of job post

                #WHEN
                #invalid params given
                invalid_request

                #THEN
                expect(response).to render_template(:new)
            end
        end

    end
    describe "#show" do
        it "requires a render of the show template" do
            #GIVEN
            job_post = FactoryBot.create(:job_post)

            #WHEN
            get(:show, params: {id: job_post.id})

            #THEN
            expect(response).to render_template(:show)
        end

        it "requires setting an instance variable @job_post for the shown object" do
        #GIVEN
        job_post = FactoryBot.create(:job_post)

        #WHEN
        get(:show, params: {id: job_post.id})

        #THEN
        expect(assigns(:job_post)).to eq(job_post)
        end
    end

end
