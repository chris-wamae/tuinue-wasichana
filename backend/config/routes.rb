Rails.application.routes.draw do
  resources :tests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "tests#index"
  # resources :beneficiaries
  # resources :donations
  resources :inventory, only: [:create, :update]
  resources :reminders, only: [:create, :update, :destroy]
  get '/inventory', to: 'inventory#view_inventories'
  get '/charities/:charity_id/anonymous_donations', to: 'donations#anonymous_donations', as: 'anonymous_donations'
end
