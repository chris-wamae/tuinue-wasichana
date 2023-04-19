class Reminder < ApplicationRecord
  belongs_to :donor, class_name: "User"
  belongs_to :charity, class_name: "User"
end
