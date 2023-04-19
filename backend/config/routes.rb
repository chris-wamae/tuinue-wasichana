Rails.application.routes.draw do
  resources :tests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "tests#index"
  #charities
  get '/charities', to: 'charities#index'
  get '/charity/:id', to: 'charities#show'
end
