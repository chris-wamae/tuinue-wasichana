class CharityController < ApplicationController
  def total_donations
    @charity = Charity.find(params[:id])
    @total_donations = Donation.where(charity_id: @charity.id).sum(:amount)
    render json: { total_donations: @total_donations }
  end
end
