require 'test_helper'

class BeneficiaryTest < ActiveSupport::TestCase
  test "should be valid" do
    assert build(:beneficiary).valid?
  end

  test "should validate presence of name, age, story, charity_id, and donor_id" do
    beneficiary = Beneficiary.new
    assert_not beneficiary.valid?
    assert_equal [:name, :age, :story, :charity_id, :donor_id], beneficiary.errors.keys
  end
end

