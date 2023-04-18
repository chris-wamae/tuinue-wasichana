require 'test_helper'

class DonationTest < ActiveSupport::TestCase
  test "should be valid" do
    assert build(:donation).valid?
  end

  test "should validate presence of donor_id, charity_id, and amount" do
    donation = Donation.new
    assert_not donation.valid?
    assert_equal [:donor_id, :charity_id, :amount], donation.errors.keys
  end

  test "should belong to donor and charity" do
    assert_equal users(:donor), donations(:one).donor
    assert_equal users(:charity), donations(:one).charity
  end
end

