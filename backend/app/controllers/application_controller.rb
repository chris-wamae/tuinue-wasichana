class ApplicationController < ActionController::API
    include Devise::Controllers::Helpers
    include ActionController::Flash
    include ActionController::RequestForgeryProtection
    include ActionController::Cookies
end
