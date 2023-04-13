class TestsController < ApplicationController
    def index
        render json: {deployment:"successful",
                      workflow:"working"}
    end
end
