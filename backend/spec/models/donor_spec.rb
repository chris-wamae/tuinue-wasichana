require 'rails_helper'

RSpec.describe Donor, type: :model do
    it "inherits from User" do
      expect(Donor.superclass).to eq(User)
    end
end