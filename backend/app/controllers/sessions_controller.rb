class SessionsController < Devise::SessionsController
  respond_to :json
  skip_before_action :require_no_authentication, only: [:create]


  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)

    user_by_email = User.find_by(email: params[:user][:email])

  puts "Input email: #{params[:user][:email]}"
  puts "User by email: #{user_by_email.inspect}"
  puts "Authenticated user email: #{resource.email}"
  puts "Authenticated user role: #{resource.role}"
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

    def auth_options
      { scope: :user }
    end
end