class Charity < User
    #associations
    has_many :donations, foreign_key: 'charity_id'
    has_many :donors, through: :donations
    has_many :beneficiaries, foreign_key: 'charity_id'
    has_many :inventories, foreign_key: 'charity_id'
    has_many :reminders, through: :donors

    #validations that apply to charity attributes only
    validates :charity_name, presence: true, uniqueness: true
    validates :charity_website, presence: true
    validates :charity_image, presence: true
    validates :about_charity, presence: true, length: { maximum: 2000 }
    validates :mission, presence: true, length: { maximum: 100 }
    validates :location, presence: true
    validates :status, presence: true
end