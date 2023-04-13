class TestsController < ApplicationController
    def index
        render json: {deployment:"successful"}
    end
end
