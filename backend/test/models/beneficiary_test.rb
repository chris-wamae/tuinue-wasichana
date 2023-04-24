require 'rails_helper'

RSpec.describe Beneficiary, type: :model do
  it "has a valid factory" do
    expect(build(:beneficiary)).to be_valid
  end

  context "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:age) }
    it { should validate_presence_of(:story) }
    it { should validate_presence_of(:charity_id) }
    it { should validate_presence_of(:donor_id) }
  end
end

