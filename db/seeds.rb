
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pokemon.destroy_all

puts 'création'
10.times do

  pokemon = Pokemon.create!(name: Faker::Games::Pokemon.name, types: 'Electric', abilities: Faker::Games::Pokemon.move,
                  description: "The world’s most popular pokemon.",
                  attack: rand(1..10), defense: rand(1..5),
                  speed: rand(1..5), hp: rand(1..255), price: rand(10..500), user_id: 1)
                  p pokemon.name

end
puts 'fin'
