Rails.application.routes.draw do
  resources :tests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  #root "tests#index"

  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }

  #donor actions
  get '/charities', to: 'donors#index'
  get '/charities/:id', to: 'donors#show'
  get '/donors/:donor_id/my_beneficiaries', to: 'donors#display_my_beneficiaries'

  #admin
  get "/admin/pending_charities", to: "admins#pending_charities"
  put "/admin/charities/:id/approve", to: "admins#approve"
  put "/admin/charities/:id/reject", to: "admins#reject"
  delete "admin/charities/:id", to: "admins#destroy"
  get "/admin/approved_charities", to: "admins#approved_charities"

  #donations
  post '/donors/:donor_id/donations', to: 'donations#create'
  get 'donors/:donor_id/donations', to: 'donations#donor_donations'
  # get '/charities/:charity_id/donations', to: 'donations#charity_donations'
  get '/charities/:charity_id/donations/non_anonymous_donations', to: 'donations#non_anonymous_donations'
  get '/charities/:charity_id/donations/anonymous_donations', to: 'donations#anonymous_donations'
  get '/charities/:charity_id/donations/total_donations', to: 'donations#total_donations'

  #beneficiaries & inventories
  resources :charities, only: [] do
    resources :beneficiaries
    resources :inventories
  end
  get '/beneficiaries', to: 'beneficiaries#all_beneficiaries'

  # Reminder route
  post '/reminders', to: 'reminders#create'
  # put '/reminders/:id', to: 'reminder#update'
  # delete '/reminders/:id', to: 'reminder#destroy'

  #charity
  #get 'charities/:id/total_donations', to: 'charities#total_charity_donations'

end
