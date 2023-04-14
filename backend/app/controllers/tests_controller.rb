class TestsController < ApplicationController
    def index
        render json: {workflow:"CI test"}
    end
end
