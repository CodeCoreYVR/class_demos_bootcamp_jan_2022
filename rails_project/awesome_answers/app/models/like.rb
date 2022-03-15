class Like < ApplicationRecord
    # if you generated the migration file frist, then you can use rails g model like --skip to skip the migration file
    belongs_to :user
    belongs_to :question

    # likes id userid question_id
    #        1  2       4
    #        2  2       9
    #        3  2       9   ???
    #        4  11      9
    # validates(:question_id, uniqueness: true) wrong way!

    validates(:question_id, uniqueness:{scope: :user_id, message: "Has already been liked!"})
    
end
