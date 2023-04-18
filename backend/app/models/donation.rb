class Donation < ApplicationRecord
  belongs_to :charity
  belongs_to :donor
end
