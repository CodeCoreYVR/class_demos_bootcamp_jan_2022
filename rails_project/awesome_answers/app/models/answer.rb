class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user
  # validates :question_id, presence: true
  validates :body, length: {minimum:3, maximum:200}
end
