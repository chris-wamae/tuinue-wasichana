class Donor < User
    has_many :donations, foreign_key: :donor_id
    has_many :charities, through: :donations
    has_many :beneficiaries, through: :donations
    has_many :reminders, foreign_key: :donor_id
end