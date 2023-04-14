class TestsController < ApplicationController
    def index
        render json: {workflow:"ci working"}
    end
end
