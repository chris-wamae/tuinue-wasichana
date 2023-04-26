class SessionsController < Devise::SessionsController
  respond_to :json
  skip_before_action :require_no_authentication, only: [:create]


  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)

    render json: {
      message: 'Signed in successfully',
      user: resource.as_json(except: [:encrypted_password, :reset_password_token, :confirmation_token, :unlock_token]),
      status: 200
    }
  end
    protected
  
    def respond_to_on_destroy
      if request.format == :json
        head :no_content
      else
        respond_with_navigational(resource) { redirect_to after_sign_out_path_for(resource_name) }
      end
    end
end