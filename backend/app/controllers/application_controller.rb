class ApplicationController < ActionController::API
    include Devise::Controllers::Helpers
    include ActionController::Flash
    include ActionController::RequestForgeryProtection
    include ActionController::Cookies

    def check_donor
        unless current_user.donor?
          render json: { error: 'Forbidden', status: 403 }, status: :forbidden
        end
    end

    def response_template(message: 'success', status: 200, data: nil)
        render json: { message: message, data: data, status: status}
    end
end
