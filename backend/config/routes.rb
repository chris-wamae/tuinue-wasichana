Rails.application.routes.draw do
  resources :tests


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  #root "tests#index"

  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }

  #donor-charity actions
  get '/charities', to: 'donors#index'
  get '/charities/:id', to: 'donors#show'

  #admin
  get "/admin/pending_charities", to: "admins#pending_charities"
  put "/admin/charities/:id/approve", to: "admins#approve"
  put "/admin/charities/:id/reject", to: "admins#reject"

  delete "admin/charities/:id", to: "admins#destroy"
  get "/admin/approved_charities", to: "admins#approved_charities"

  resources :beneficiaries
  resources :donations
  get '/charities/:charity_id/anonymous_donations', to: 'donations#anonymous_donations', as: 'anonymous_donations'



  # Reminder routes
  post '/reminders', to: 'reminder#create'
  put '/reminders/:id', to: 'reminder#update'
  delete '/reminders/:id', to: 'reminder#destroy'

  # Inventory routes
  post '/inventories', to: 'inventory#create'
  put '/inventories/:id', to: 'inventory#update'
  delete '/inventories/:id', to: 'inventory#destroy'

  # View inventories route

  get '/inventories', to: 'inventory#view_inventories'


end
