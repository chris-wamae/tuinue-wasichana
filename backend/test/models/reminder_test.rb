require "test_helper"

class ReminderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should be valid" do
    assert @reminder.valid?
  end

  test "should not be valid without a date" do
    @reminder.date = nil
    assert_not @reminder.valid?
  end

  test "should not be valid without a time" do
    @reminder.time = nil
    assert_not @reminder.valid?
  end

  test "should not be valid without a donor" do
    @reminder.donor = nil
    assert_not @reminder.valid?
  end

  test "should not be valid without a charity" do
    @reminder.charity = nil
    assert_not @reminder.valid?
  end

  test "should belong to a donor" do
    assert_equal @donor, @reminder.donor
  end

  test "should belong to a charity" do
    assert_equal @charity, @reminder.charity
  end
end


