class User < ApplicationRecord
  has_many :donors
  has_many :charities
  has_one :admin
end
