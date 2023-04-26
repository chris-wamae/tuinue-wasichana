class DonorsController < ApplicationController
    before_action :authenticate_user!
    before_action :check_donor

    def index
        render json: User.charity, status: :ok
    end
    
    def show
        charity = find_charity
        render json: charity, status: :ok
    end
    
    private
    def find_charity
        User.charity.find(params[:id])
    end

    def check_donor
        unless current_user.donor?
          render json: { error: 'Forbidden', status: 403 }, status: :forbidden
        end
    end
end
