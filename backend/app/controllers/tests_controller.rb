class TestsController < ApplicationController
    def index
        render json: {workflow:"ci test"}
    end
end
