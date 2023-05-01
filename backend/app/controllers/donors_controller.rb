class DonorsController < ApplicationController
    before_action :authenticate_user!
    before_action :check_donor
    before_action :find_donor, only: [:display_my_beneficiaries]


    def index
        render json: User.charity.charity_approved, status: :ok
    end

    def show
        charity = find_charity
        render json: charity, status: :ok
    end

    def display_my_beneficiaries
        beneficiaries = @donor.beneficiaries
        render json: beneficiaries, status: :ok
    end
    private
    def find_charity
        User.charity.charity_approved.find(params[:id])
    end

    def find_donor
        user = User.donor.find(params[:donor_id])
        @donor = user.becomes(Donor)
    end

    # def check_donor
    #     unless current_user.donor?
    #       render json: { error: 'Forbidden', status: 403 }, status: :forbidden
    #     end
    # end
end
