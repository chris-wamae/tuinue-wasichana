class User < ApplicationRecord
  # has_many :donations (foreign key: donor_id)
  # has_many :charity_donations, class_name: "Donation", foreign_key: "charity_id"
  # has_many :beneficiaries, foreign_key: "charity_id"
  # has_many :inventories, foreign_key: "charity_id"
  # has_many :donor_reminders, class_name: "Reminder", foreign_key: "donor_id"
  # has_many :charity_reminders, class_name: "Reminder", foreign_key: "charity_id"
end
