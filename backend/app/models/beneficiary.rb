class Beneficiary < ApplicationRecord
  belongs_to :charity, class_name: 'User'
  belongs_to :donor, class_name: 'User'
  has_many :inventories, through: :charity
end
