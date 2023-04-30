class BeneficiariesController < ApplicationController
    before_action :find_charity, only: [:index]
    # before_action :find_beneficiary, only: [:update,]
    #displays all inventories
    def all_beneficiaries
        render json: Beneficiary.all, status: :ok
    end

    #displays all beneficiaries for a specific charity 
    def index 
        beneficiaries = @charity.beneficiaries
        render json: beneficiaries, status: :ok
    end

    private
    def find_charity
        user = User.charity.find(params[:charity_id])
        @charity = user.becomes(Charity)
    end
end
