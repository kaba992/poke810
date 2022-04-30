class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.text :type
      t.text :abilities
      t.text :description
      t.integer :attack
      t.integer :defense
      t.integer :speed
      t.integer :hp
      t.integer :price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
