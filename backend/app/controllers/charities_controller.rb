class CharitiesController < ApplicationController
    def index
        render json: User.charity, status: :ok
    end
    
    
end
