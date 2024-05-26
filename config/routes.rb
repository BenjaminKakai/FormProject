Rails.application.routes.draw do
  # Root route
  root 'welcome#index'

  # Devise routes for users
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Remove the existing fetch_data route

  # Route to fetch data using DataController
  get 'fetch_data', to: 'data#fetch'

  # Handle OPTIONS requests to /users/sign_in
  match '/users/sign_in', to: 'sessions#options', via: [:options]

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
