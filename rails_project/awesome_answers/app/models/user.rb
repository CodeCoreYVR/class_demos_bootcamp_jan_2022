class User < ApplicationRecord
    has_secure_password
    # provide 2 attributes here: password, password_confimation
    # add a validation for password field
    # provides a method named 'authenticate'
    has_many :answers, dependent: :destroy
    # the questions belongs to this user
    has_many :questions, dependent: :destroy
    has_many :job_posts, dependent: :destroy

    has_many :likes, dependent: :destroy
    # the questions liked by this user
    has_many :liked_questions, through: :likes, source: :question

    # has_and_belongs_to_many(
    #     :liked_questions, # The name we can set it to whatever we want
    #     {
    #         class_name: "Question", # the model that asscociating to
    #         join_table: "likes", # the join table
    #         association_foreign_key: "question_id", # the foreign key for the associated table
    #         foreign_key: "user_id" # foreign key for the current table(User)
    #     }
    # )
    # users id 2 
    # questions id 4, 9
    # @user.liked_questions => [<Question id: 4>, <Question id: 9>]
    # likes id userid question_id
    #        1  2       4
    #        2  2       9


    def full_name
        self.first_name + " " + self.last_name
    end
end
