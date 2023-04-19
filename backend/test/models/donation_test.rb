require 'rails_helper'

RSpec.describe Donation, type: :model do
  it "has a valid factory" do
    expect(build(:donation)).to be_valid
  end

  context "validations" do
    it { should validate_presence_of(:donor_id) }
    it { should validate_presence_of(:charity_id) }
    it { should validate_presence_of(:amount) }
  end

  context "associations" do
    it { should belong_to(:donor).class_name('User') }
    it { should belong_to(:charity).class_name('User') }
  end
end
