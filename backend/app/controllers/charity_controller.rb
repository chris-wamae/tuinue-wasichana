class CharitiesController < ApplicationController
  def index
    @charities = Charity.all
  end

  def show
    @charity = Charity.find(params[:id])
    @total_donations = Donation.where(charity_id: @charity.id).sum(:amount)
  end
end
