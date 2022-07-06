Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  get 'dashboard', to: 'pages#dashboard'

  resources :pokemons, only: %i[index show new create destroy] do
    resources :bookings, only: %i[create]
  end

  resources :bookings, only: %i[show update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
