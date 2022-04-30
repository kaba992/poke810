Rails.application.routes.draw do
  get 'bookings/create'
  get 'bookings/update'
  get 'pokemons/index'
  get 'pokemons/show'
  get 'pokemons/new'
  get 'pokemons/create'
  devise_for :users
  root to: 'pages#home'
  get 'dashboard', to: 'pages#dashboard'

  resources :pokemons, only: %i[index show new create] do
    resources :bookings, only: %i[create]
  end

  resources :bookings, only: %i[update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
