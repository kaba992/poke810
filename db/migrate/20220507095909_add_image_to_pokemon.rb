class AddImageToPokemon < ActiveRecord::Migration[6.1]
  def change
    add_column :pokemons, :image_url, :text
  end
end
