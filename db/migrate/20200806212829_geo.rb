class Geo < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :lat, :float;
    add_column :videos, :lng, :float;
  end
end
