require "test_helper"

class InventoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "should be valid" do
    assert @inventory.valid?
  end

  test "item should be present" do
    @inventory.item = " "
    assert_not @inventory.valid?
  end

  test "item should not be too long" do
    @inventory.item = "a" * 256
    assert_not @inventory.valid?
  end

  test "quantity should be present" do
    @inventory.quantity = nil
    assert_not @inventory.valid?
  end

  test "quantity should be an integer" do
    @inventory.quantity = 2.5
    assert_not @inventory.valid?
  end

  test "quantity should be greater than or equal to 0" do
    @inventory.quantity = -1
    assert_not @inventory.valid?
  end

  test "charity should be present" do
    @inventory.charity = nil
    assert_not @inventory.valid?
  end

  test "beneficiary should be present" do
    @inventory.beneficiary = nil
    assert_not @inventory.valid?
  end

  test "should belong to a charity" do
    assert_instance_of User, @inventory.charity
  end

  test "should belong to a beneficiary" do
    assert_instance_of Beneficiary, @inventory.beneficiary
  end
end
