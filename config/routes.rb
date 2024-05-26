Rails.application.routes.draw do
  # Root route
  root 'welcome#index'

  # Devise routes for users
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Route to fetch data
  get 'fetch_data', to: 'welcome#fetch_data'

  # Handle OPTIONS requests to /users/sign_in
  match '/users/sign_in', to: 'sessions#options', via: [:options]

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
