class User < ApplicationRecord
  enum role: { donor: 0, charity: 1, admin: 2 }
  
  #status for charity only
  enum status: { pending: 0, approved: 1, rejected: 2 }, _prefix: :charity
end
