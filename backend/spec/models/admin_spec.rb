require 'rails_helper'

RSpec.describe Admin, type: :model do
    it "inherits from User" do
      expect(Admin.superclass).to eq(User)
    end
end