class ChangeColumnNameType < ActiveRecord::Migration[6.1]
  def change
    rename_column :pokemons, :type, :types
  end
end
