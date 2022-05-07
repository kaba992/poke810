class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home
  def home
    @pokemons = Pokemon.all
  end

  # Pour les bookers :
  # - mes pokemons que je loue
  # - Voir ses réservations

  # Pour les owners :
  # - mes pokemons que je détiens (en tant que proprio) + leur statuts
  # - Mes réservation en tant que owner

  def dashboard
    @bookings_booker = current_user.bookings
    @bookings_owner = current_user.bookings_owner
    @pokemons_booker = current_user.pokemons_reserved
    @pokemons_owner = current_user.pokemons
  end
end
