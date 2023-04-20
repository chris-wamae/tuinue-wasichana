class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  enum role: { donor: 0, charity: 1, admin: 2 }

  #status for charity only
  enum status: { pending: 0, approved: 1, rejected: 2 }, _prefix: :charity

  validates :role, presence: true
  validates :username, presence: true, uniqueness: true, length: { minimum: 4, maximum: 12 }
  validates :email, presence: true, uniqueness: true

end
