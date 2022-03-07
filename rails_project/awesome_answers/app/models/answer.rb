class Answer < ApplicationRecord
  belongs_to :question
  # validates :question_id, presence: true
  validates :body, length: {minimum:3, maximum:200}
end
