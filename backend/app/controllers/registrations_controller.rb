class RegistrationsController < Devise::RegistrationsController
    before_action :role_based_permitted_parameters, if: :devise_controller?
    skip_before_action :require_no_authentication, only: [:create]

  
    protected
  
    def role_based_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) do |user_params|
        if user_params[:role] == 'charity'
          user_params.permit(
            :username, :email, :password, :password_confirmation, :role,
            :charity_name, :charity_website, :charity_image, :about_charity,
            :mission, :contacts, :location
          )
        else
          user_params.permit(
            :username, :email, :password, :password_confirmation, :role
          )
        end
      end
    end
  end