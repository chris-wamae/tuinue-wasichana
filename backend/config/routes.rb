Rails.application.routes.draw do
  resources :tests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  #root "tests#index"

  devise_for :users, controllers: {
    registrations: 'registrations'
  }

  #charities
  get '/charities', to: 'charities#index'
  get '/charity/:id', to: 'charities#show'

  #admin
  get "/admin/pending_charities", to: "admins#pending_charities"
  put "/admin/charities/:id/approve", to: "admins#approve"
  put "/admin/charities/:id/reject", to: "admins#reject"
  delete "admin/charities/:id", to: "admins#destroy"
  get "/admin/approved_charities", to: "admins#approved_charities"

end
