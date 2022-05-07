
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

Pokemonbase.destroy_all
# Debut de la seed
require 'csv'
file_path = "db/poketraduction.csv"
pokelist = []
CSV.foreach(file_path) do |row|
 pokelist << row
end
french_name = {}
official_id = {}
pokelist.each do |poke|
 french_name[poke[1].downcase] = poke[2]
 official_id[poke[1].downcase] = poke[0].to_i
end

url = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
pokemons_serialized = URI.open(url).read
pokemons = JSON.parse(pokemons_serialized)['results']
pokemons.each do |pokemon|
  url = "#{pokemon['url']}"
pokemon_serialized = URI.open(url).read

pokemont = JSON.parse(pokemon_serialized)


Pokemonbase.create!(name: french_name[pokemon['name']], official_id: official_id[pokemon['name']],
                      types: pokemont['types'].map { |type| type['type']['name']},
                      abilities: pokemont['abilities'].map { |ability| ability['ability']['name'] },
                      attack: pokemont['stats'].find { |stat| stat['stat']['name'] == 'attack' }['base_stat'],
                      defense: pokemont['stats'].find { |stat| stat['stat']['name'] == 'defense' }['base_stat'],
                      speed: pokemont['stats'].find { |stat| stat['stat']['name'] == 'speed' }['base_stat'],
                      hp: pokemont['stats'].find { |stat| stat['stat']['name'] == 'hp' }['base_stat'],image_url: pokemont['sprites']['other']['dream_world']['front_default'])
end
# Fin de la seed
