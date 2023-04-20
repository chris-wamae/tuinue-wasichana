class DonationsController < ApplicationController
  before_action :set_donation, only: [:show, :edit, :update, :destroy]

  def index
    @donations = Donation.all
  end

  def show
  end

  def new
    @donation = Donation.new
  end

  def create
    @donation = Donation.new(donation_params)
    if @donation.save
      redirect_to @donation, notice: "Donation was successfully created."
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @donation.update(donation_params)
      redirect_to @donation, notice: "Donation was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @donation.destroy
    redirect_to donations_url, notice: "Donation was successfully destroyed."
  end

  private

  def set_donation
    @donation = Donation.find(params[:id])
  end

  def donation_params
    params.require(:donation).permit(:donor_id, :charity_id, :amount, :anonymous, :is_monthly)
  end

  def anonymous_donors_amount
    charity_id = params[:charity_id]
    amount = Donation.where(charity_id: charity_id, anonymous: true).sum(:amount)
    render json: { anonymous_donors_amount: amount }
  end
end
