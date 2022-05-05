class CreatePokemonbases < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemonbases do |t|
      t.integer :official_id
      t.string :name
      t.text :types
      t.text :abilities
      t.integer :attack
      t.integer :defense
      t.integer :speed
      t.integer :hp

      t.timestamps
    end
  end
end
