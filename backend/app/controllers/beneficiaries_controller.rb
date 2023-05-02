class BeneficiariesController < ApplicationController
    before_action :find_charity, only: [:index, :create, :update, :destroy]
    before_action :find_beneficiary, only: [:update, :destroy]
    #displays all inventories
    def all_beneficiaries
        render json: Beneficiary.all, status: :ok
    end

    #displays all beneficiaries for a specific charity 
    def index 
        beneficiaries = @charity.beneficiaries
        render json: beneficiaries, status: :ok
    end

    def create
        beneficiary = @charity.beneficiaries.new(beneficiary_params)
        if beneficiary.save
          render json: beneficiary, status: :created
        else
          render json: { errors: beneficiary.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        if @beneficiary.charity_id == @charity.id
          if @beneficiary.update(beneficiary_params)
            render json: @beneficiary, status: :ok
          else
            render json: { errors: @beneficiary.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Forbidden action! You are not authorized to make changes to this Beneficiary' }, status: :forbidden
        end
    end

    def destroy
        if @beneficiary.charity_id == @charity.id
          @beneficiary.destroy
          render json: { message: 'Beneficiary successfully deleted' }, status: :ok
        else
          render json: { error: 'Forbidden action! You are not authorized to delete this beneficiary' }, status: :forbidden
        end
    end
    private
    def find_charity
        user = User.charity.find(params[:charity_id])
        @charity = user.becomes(Charity)
    end

    def beneficiary_params
        params.permit(:name, :age, :story, :image, :donor_id)
    end

    def find_beneficiary
        @beneficiary = Beneficiary.find_by(id: params[:id], charity_id: params[:charity_id])
        if @beneficiary.nil?
          render json: { error: "Sorry, Beneficiary not found" }, status: :not_found
        end
    end
end
