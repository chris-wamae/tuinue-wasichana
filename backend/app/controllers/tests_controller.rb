class TestsController < ApplicationController
    def index
        render json: {workflow:"CI setting up schema test."}
    end
end
