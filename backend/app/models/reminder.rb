class Reminder < ApplicationRecord
  belongs_to :donor, class_name: "User"
  belongs_to :charity, class_name: "User"

  validates :reminder_date, presence: true
  # validates :time, presence: true
  validates :donor, presence: true
  validates :charity, presence: true

end