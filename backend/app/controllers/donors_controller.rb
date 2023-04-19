class DonorsController < ApplicationController
    def index
        render json: Charity.all, status: :ok
    end
end
