
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Pokemon.destroy_all

# puts 'création'
# 10.times do

#   pokemon = Pokemon.create!(name: Faker::Games::Pokemon.name, types: 'Electric', abilities: Faker::Games::Pokemon.move,
#                   description: "The world’s most popular pokemon.",
#                   attack: rand(1..10), defense: rand(1..5),
#                   speed: rand(1..5), hp: rand(1..255), price: rand(10..500), user_id: 1)
#                   p pokemon.name

# end
# puts 'fin'
# Debut de la seed
url = 'https://pokeapi.co/api/v2/pokemon?limit=2&offset=0'
pokemons_serialized = URI.open(url).read
pokemons = JSON.parse(pokemons_serialized)['results']
pokemons.each do |pokemon|
  p pokemon
  url = "#{pokemon['url']}"
pokemon_serialized = URI.open(url).read
pokemont = JSON.parse(pokemon_serialized)
 p Pokemonbase.create!(name: pokemon['name'],
                      types: pokemont['types'].map { |type| type['type']['name']},
                      abilities: pokemont['abilities'].map { |ability| ability['ability']['name'] },
                      attack: pokemont['stats'].find { |stat| stat['stat']['name'] == 'attack' }['base_stat'],
                      defense: pokemont['stats'].find { |stat| stat['stat']['name'] == 'defense' }['base_stat'],
                      speed: pokemont['stats'].find { |stat| stat['stat']['name'] == 'speed' }['base_stat'],
                      hp: pokemont['stats'].find { |stat| stat['stat']['name'] == 'hp' }['base_stat'],image_url: pokemont['sprites']['front_default'])
end
# Fin de la seed
