class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  enum role: { donor: 0, charity: 1, admin: 2 }

  #status for charity only
  enum status: { pending: 0, approved: 1, rejected: 2 }, _prefix: :charity

  validates :role, presence: true
  validates :username, uniqueness: true, length: { minimum: 4, maximum: 32 }
  validates :email, presence: true, uniqueness: true

  before_create :set_default_charity_status

  private

  def set_default_charity_status
    self.status = "pending" if charity?
  end

  def self.find_for_database_authentication(warden_conditions)
    where(email: warden_conditions[:email].downcase).first
  end
end
