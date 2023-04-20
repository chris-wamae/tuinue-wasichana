class CharityController < ApplicationController
  def index
    @charities = Charity.all
  end

  def show
    @charity = Charity.find(params[:id])
    @total_donations = Donation.where(charity_id: @charity.id).sum(:amount)
    @non_anonymous_donors = @charity.donations.where.not(donor: nil).map(&:donor).uniq
  end


end
