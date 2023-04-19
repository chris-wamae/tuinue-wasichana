class User < ApplicationRecord
  enum role: { donor: 0, charity: 1, admin: 2 }

  #status for charity only
  enum status: { pending: 0, approved: 1, rejected: 2 }, _prefix: :charity

  validates :role, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

end
