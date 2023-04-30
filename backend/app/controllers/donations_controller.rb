class DonationsController < ApplicationController
#   before_action :set_donation, only: [:show, :edit, :update, :destroy]

#   def create
#     @donation = Donation.new(donation_params)
#     if @donation.save
#       redirect_to @donation, notice: "Donation was successfully created."
#     else
#       render :new
#     end
#   end

#   def index
#     @donations = Donation.all
#     render json: @donations, only: [:id, :amount]
#   end


#   def new
#     @donation = Donation.new
#   end



#   def update
#     if @donation.update(donation_params)
#       redirect_to @donation, notice: "Donation was successfully updated."
#     else
#       render :edit
#     end
#   end

#   def destroy
#     @donation.destroy
#     redirect_to donations_url, notice: "Donation was successfully destroyed."
#   end

#   private

#   def set_donation
#     @donation = Donation.find(params[:id])
#   end

#   def donation_params
#     params.require(:donation).permit(:donor_id, :charity_id, :amount, :anonymous, :is_monthly)
#   end

#   def anonymous_donations
#     @charity = User.find(params[:charity_id])
#     @donations = Donation.where(charity_id: @charity.id, anonymous: true)
#     @total_donation_amount = @donations.sum(:amount)
#     render json: { charity_name: @charity.charity_name, total_donation_amount: @total_donation_amount }
#   end


# before_action :authenticate_user!
# before_action :check_donor, only: [:create]
before_action :find_donor, only: [:create, :donor_donations]
before_action :find_charity, only: [:create, :non_anonymous_donations, :anonymous_donations, :total_donations]

def create
  donation = @donor.donations.new(donation_params)
  donation.charity = @charity

  if donation.save
    render json: { message: 'Donation made successfully', data: donation }, status: :created
  else
    render json: { errors: donation.errors.full_messages }, status: :unprocessable_entity
  end
end

def donor_donations
  donations = @donor.donations.includes(:charity)
  render json: { data: @donor.donations }, status: :ok
end

def non_anonymous_donations
  donations = @charity.donations.includes(:donor).where(anonymous: false)
  #nest donor(non-anonymous) details in donations
  donation_data = donations.as_json(include: { donor: { only: [:id, :username, :email] } })
  render json: { data: donation_data }, status: :ok
end

def anonymous_donations
  #display amount only for the anonymous donors
  anonymous_donations = @charity.donations.where(anonymous: true).pluck(:amount)
  render json: { data: anonymous_donations }, status: :ok
end

def total_donations
  total_donated = @charity.donations.sum(:amount)
  render json: { data: { total_donations: total_donated } }, status: :ok
end


private

def find_donor
  user = User.donor.find(params[:donor_id])
  @donor = user.becomes(Donor)
end

def find_charity
  user = User.charity.find(params[:charity_id])
  @charity = user.becomes(Charity)
end

def donation_params
  params.require(:donation).permit(:amount, :is_monthly, :anonymous)
end

end
