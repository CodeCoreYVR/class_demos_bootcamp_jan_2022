class JobPostsController < ApplicationController
    def new
        @job_post = JobPost.new
    end

    def create
        @job_post = JobPost.create params.require(:job_post)
        .permit(
            :title,
            :description,
            :location,
            :company_name,
            :min_salary,
            :max_salary
        )
        if @job_post.save  #or @job_post.persisted?
            redirect_to job_post_path(@job_post)
        else
            render :new
        end

    end

    def show
    end
end
