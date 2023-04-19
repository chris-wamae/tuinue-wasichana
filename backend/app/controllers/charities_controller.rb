class CharitiesController < ApplicationController
    def index
        render json: Charity.all, status: :ok
    end
    
    def show
        charity = find_charity
        render json: charity, status: :ok
    end
    
    private
    def find_charity
        Charity.find(params[:id])
    end
end
