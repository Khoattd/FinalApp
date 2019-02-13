class User < ApplicationRecord
has_many :albums

    validates :first_name, :last_name , presence:true, length: {minimum:2,
                                                                too_short: "must be a legit name"}
    validates :email, presence: true,
                    length: { minimum: 5 }
    validates :password, confirmation: true,
                    length: { minimum: 8 }
    validates :password_confirmation, presence: true 
               
    
                                                    
end
