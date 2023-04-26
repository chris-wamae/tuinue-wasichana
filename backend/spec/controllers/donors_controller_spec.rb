require 'rails_helper'


RSpec.describe DonorsController, type: :controller do

  let(:charity_attributes) { {   username: "girlshelpinggirlsperiod",
  email: "girlshelpinggirlsperiod@gmail.com",
  charity_name: "Girls Helping Girls. Period.",
  charity_website: "https://girlshelpinggirlsperiod.org",
  charity_image: "https://www.charityforgirls.org/images/logo.png",
  about_charity: "At Girls Helping Girls. Period., we believe menstrual health leads to overall health. And human dignity.We are dedicated to educating people about the need, collecting/distributing products, and advocating for systemic change.",
  mission: "Empowering individuals to manage their periods with dignity and equity by providing menstrual products, education, and advocacy.",
  contacts: "0734567890",
  location: "New York, NY",
  status: 1,
  role: :charity,
  password: "password",
  password_confirmation: "password" } }

  let(:charity) { Charity.create!(charity_attributes) }
  let!(:donor1) { User.create!(username: 'Donor1', email: 'donor1@example.com', password: 'password', role: 'donor') }

  context "when user is a donor" do
    let(:donor_user) { donor1 }

    before do
      sign_in donor_user
    end

    describe "GET #index" do
      it "returns http success" do
        get :index
        expect(response).to have_http_status(:success)
      end
    end

    describe "GET #show" do
      it "returns http success" do
        get :show, params: { id: charity.id }
        expect(response).to have_http_status(:success)
      end
    end
  end

  context "when user is not a donor" do
    let(:non_donor_user) { charity }

    before do
      sign_in non_donor_user
    end

    describe "GET #index" do
      it "returns http forbidden" do
        get :index
        expect(response).to have_http_status(:forbidden)
      end
    end

    describe "GET #show" do
      it "returns http forbidden" do
        get :show, params: { id: charity.id }
        expect(response).to have_http_status(:forbidden)
      end
    end
  end
end
