require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it "requires a role" do
      user = User.new(username: "test", email: "test@example.com", password: "password")
      expect(user).to_not be_valid
      expect(user.errors[:role]).to include("can't be blank")
    end
    
    it "requires a unique username" do
      User.create(username: "test", email: "test@example.com", password: "password", role: "donor")
      user = User.new(username: "test", email: "test2@example.com", password: "password", role: "donor")
      expect(user).to_not be_valid
      expect(user.errors[:username]).to include("has already been taken")
    end
    
    it "requires a unique email" do
      User.create(username: "test", email: "test@example.com", password: "password", role: "donor")
      user = User.new(username: "test2", email: "test@example.com", password: "password", role: "donor")
      expect(user).to_not be_valid
      expect(user.errors[:email]).to include("has already been taken")
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

  describe 'set_default_charity_status' do
    context 'when user is a charity' do
      it 'sets the default status to pending' do
        charity_user = User.create!(
          username: 'charity_user',
          email: 'charity@example.com',
          password: 'password123',
          role: 'charity'
        )

        expect(charity_user.status).to eq('pending')
      end
    end

    context 'when user is not a charity' do
      it 'does not set the default status' do
        donor_user = User.create!(
          username: 'donor_user',
          email: 'donor@example.com',
          password: 'password123',
          role: 'donor'
        )

        expect(donor_user.status).to be_nil
      end
    end
  end
end