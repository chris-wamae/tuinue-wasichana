class TestsController < ApplicationController
    def index
        render json: {workflow:"working"}
    end
end
