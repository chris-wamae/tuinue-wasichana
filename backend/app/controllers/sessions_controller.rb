class SessionsController < Devise::SessionsController
    protected
  
    def respond_to_on_destroy
      if request.format == :json
        head :no_content
      else
        respond_with_navigational(resource) { redirect_to after_sign_out_path_for(resource_name) }
      end
    end
  end