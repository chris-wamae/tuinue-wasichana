class AdminsController < ApplicationController
    def pending_charities
        render json: User.charity.charity_pending, status: :ok
    end
end
