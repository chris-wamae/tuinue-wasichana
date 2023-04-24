class AdminsController < ApplicationController
    before_action :authenticate_user!
    before_action :check_admin
    before_action :find_pending_charity, only: [:approve, :reject]

    def pending_charities
        render json: User.charity.charity_pending, status: :ok
    end

    def approved_charities
        render json: User.charity.charity_approved, status: :ok
    end

    def approve
        @charity.charity_approved!
        response_template(message: 'Charity Accepted', data: @charity, status: 202)
    end

    def reject
        @charity.charity_rejected!
        response_template(message: 'Charity Rejected', data: @charity, status: 202)
    end

    def destroy
        charity = User.charity.charity_approved.find(params[:id])
        charity.destroy
        response_template(message: 'success', data: { info: 'Charity successfully deleted!' }, status: 204)
    end

    private
    def find_pending_charity
        @charity = User.charity.charity_pending.find(params[:id])
    end

    def response_template(message: 'success', status: 200, data: nil)
        render json: { message: message, data: data, status: status}
    end

    def check_admin
        unless current_user.admin?
          render json: { error: 'Forbidden', status: 403 }, status: :forbidden
        end
    end
end
