require 'rails_helper'

RSpec.describe Charity, type: :model do
    it "inherits from User" do
      expect(Charity.superclass).to eq(User)
    end
end