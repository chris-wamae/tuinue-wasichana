Rails.application.routes.draw do
  resources :tests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "tests#index"

  devise_for :users, controllers: {
    registrations: 'registrations'
  }

  #charities
  get '/charities', to: 'charities#index'
  get '/charity/:id', to: 'charities#show'

  #admin
  get "/admin/charities", to: "admins#pending_charities"
  put "/admin/approve/:id", to: "admins#approve"
  put "/admin/reject/:id", to: "admins#reject"
