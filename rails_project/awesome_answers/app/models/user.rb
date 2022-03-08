class User < ApplicationRecord
    has_secure_password
    # provide 2 attributes here: password, password_confimation
    # add a validation for password field
    # provides a method named 'authenticate'
    has_many :answers, dependent: :destroy
    has_many :questions, dependent: :destroy

    def full_name
        self.first_name + " " + self.last_name
    end
end
