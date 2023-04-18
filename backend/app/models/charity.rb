class Charity < User
    has_many :donations, foreign_key: 'charity_id'
    has_many :donors, through: :donations
    has_many :beneficiaries, foreign_key: 'charity_id'
    has_many :inventories, foreign_key: 'charity_id'
    has_many :reminders, through: :donors
end