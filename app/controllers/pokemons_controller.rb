class PokemonsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]

  def index
    if params[:query].present?
      @pokemons = Pokemon.where("name ILIKE ?", "%#{params[:query]}%")
    else
      @pokemons = Pokemon.all
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    @booking = Booking.new
  end

  def new
    @pokemon = Pokemon.new
    @pokemons = Pokemonbase.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    @pokebase = Pokemonbase.find(params[:pokemon][:id].to_i)
    @pokemon.name = @pokebase.name
    @pokemon.attack = @pokebase.attack
    @pokemon.defense = @pokebase.defense
    @pokemon.speed = @pokebase.speed
    @pokemon.hp = @pokebase.hp
    @pokemon.image_url = @pokebase.image_url
    @pokemon.types = @pokebase.types
    @pokemon.abilities = @pokebase.abilities
    @pokemon.user = current_user
    if @pokemon.save
      redirect_to pokemon_path(@pokemon)
    else
      render :new
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :description, :price)
  end
end
