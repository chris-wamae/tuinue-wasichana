require 'rails_helper'

RSpec.describe CharitiesController, type: :controller do
    include Devise::Test::ControllerHelpers
  let!(:charity1) { User.create!(username: 'Charity1', email: 'charity1@example.com', password: 'password', role: 'charity') }
  let!(:charity2) { User.create!(username: 'Charity2', email: 'charity2@example.com', password: 'password', role: 'charity') }
  let!(:donor) { User.create!(username: 'Donor', email: 'donor@example.com', password: 'password', role: 'donor') }

  describe 'GET #index' do
    before { get :index }

    it 'returns http success' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns all charities' do
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end

  describe 'GET #show' do
    context 'when the charity exists' do
      before { get :show, params: { id: charity1.id } }

      it 'returns http success' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the correct charity' do
        expect(JSON.parse(response.body)["id"]).to eq(charity1.id)
      end
    end

    context 'when the charity does not exist' do
      it 'raises a record not found error' do
        expect {
          get :show, params: { id: 'non-existent-id' }
        }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end