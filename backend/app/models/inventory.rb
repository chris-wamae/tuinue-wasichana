class Inventory < ApplicationRecord
    # belongs_to :charity, class_name: 'User'
    belongs_to :beneficiary

    validates :item_name, presence: true, length: { maximum: 255 }
    validates :quantity, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
    validates :charity_id, presence: true
    validates :beneficiary_id, presence: true

   
end
