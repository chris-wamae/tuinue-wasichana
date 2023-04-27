class CharityController < ApplicationController

  def show
    charity = User.charity.find(params[:id])
    total_donations = Donation.where(charity_id: charity.id).sum(:amount)
  end
end
