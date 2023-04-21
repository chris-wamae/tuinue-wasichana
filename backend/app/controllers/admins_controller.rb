class AdminsController < ApplicationController
    def pending_charities
        render json: User.charity.charity_pending, status: :ok
    end

    def approve
        charity = find_pending_charity
        charity.charity_approved!
        render json: { status: 'success', message: 'Charity approved', charity: charity }
    end

    def reject
        charity = find_pending_charity
        charity.charity_rejected!
        render json: { status: 'success', message: 'Charity rejected', charity: charity }
    end
    private
    def find_pending_charity
        User.charity.charity_pending.find(params[:id])
    end
end
