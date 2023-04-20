class CharitiesController < ApplicationController
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
end
