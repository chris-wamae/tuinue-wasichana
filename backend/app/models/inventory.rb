class Inventory < ApplicationRecord
    belongs_to :charity, class_name: 'User'
    belongs_to :beneficiary

end
