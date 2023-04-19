require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it "requires a role" do
      user = User.new(username: "test", email: "test@example.com", password_digest: "password")
      expect(user).to_not be_valid
      expect(user.errors[:role]).to include("can't be blank")
    end
    
    it "requires a unique username" do
      User.create(username: "test", email: "test@example.com", password_digest: "password", role: "donor")
      user = User.new(username: "test", email: "test2@example.com", password_digest: "password", role: "donor")
      expect(user).to_not be_valid
      expect(user.errors[:username]).to include("has already been taken")
    end
    
    it "requires a unique email" do
      User.create(username: "test", email: "test@example.com", password_digest: "password", role: "donor")
      user = User.new(username: "test2", email: "test@example.com", password_digest: "password", role: "donor")
      expect(user).to_not be_valid
      expect(user.errors[:email]).to include("has already been taken")
    end
    
    it "requires a password digest" do
      user = User.new(username: "test", email: "test@example.com", role: "donor")
      expect(user).to_not be_valid
      expect(user.errors[:password_digest]).to include("can't be blank")
    end
  end
  
  describe "enums" do
    it "defines roles" do
      expect(User.roles).to eq({"donor"=>0, "charity"=>1, "admin"=>2})
    end
    
    it "defines charity status" do
      expect(User.statuses).to eq({"pending"=>0, "approved"=>1, "rejected"=>2})
    end
  end
end