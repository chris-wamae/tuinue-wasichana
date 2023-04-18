class Beneficiary < ApplicationRecord
  belongs_to :charity
  belongs_to :donor
  has_many :inventories
end
