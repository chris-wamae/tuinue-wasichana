class Inventory < ApplicationRecord
  belongs_to :beneficiary
  belongs_to :charity
end
