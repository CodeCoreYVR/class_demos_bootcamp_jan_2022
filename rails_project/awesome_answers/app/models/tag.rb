class Tag < ApplicationRecord
    #ASSOCIATIONS
    has_many :taggings, dependent: :destroy
    has_many :questions, through: :taggings

    #VALIDATIONS
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    # "Science" and "SCIENCE" can't co-exist with "case_sensitive: false"
end
