require 'rails_helper'


RSpec.describe AdminsController, type: :controller do
  include Devise::Test::ControllerHelpers

  let(:admin) { User.create!(username: 'admin', email: 'admin@example.com', password: 'password', role: 'admin') }
  let(:pending_charity) { User.create!(username: 'pending_charity', email: 'pending_charity@example.com', password: 'password', role: 'charity', status: 'pending') }
  let(:approved_charity) { User.create!(username: 'approved_charity', email: 'approved_charity@example.com', password: 'password', role: 'charity', status: 'approved') }

  before do
    sign_in admin
  end

  describe 'GET #pending_charities' do
    it 'returns http success' do
      get :pending_charities
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #approved_charities' do
    it 'returns http success' do
      get :approved_charities
      expect(response).to have_http_status(:success)
    end
  end

  describe 'PUT #approve' do
    it 'approves a pending charity' do
      put :approve, params: { id: pending_charity.id }
      expect(response).to have_http_status(200)
      pending_charity.reload
      expect(pending_charity.status).to eq('approved')
    end
  end

  describe 'PUT #reject' do
    it 'rejects a pending charity' do
      put :reject, params: { id: pending_charity.id }
      expect(response).to have_http_status(200)
      pending_charity.reload
      expect(pending_charity.status).to eq('rejected')
    end
  end

  # describe 'DELETE #destroy' do
  # it 'deletes an approved charity' do
  #   approved_charity  = User.create(
  #     email: "approved_charity@example.com",
  #     password: "password",
  #     role: "charity",
  #     status: "approved"
  #   )
  #   delete :destroy, params: { id: approved_charity.id }
  #   expect(response).to have_http_status(204)
  #   expect(User.exists?(approved_charity.id)).to be_falsey
  # end
# end
end