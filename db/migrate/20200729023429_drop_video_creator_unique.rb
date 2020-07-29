class DropVideoCreatorUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :creator_id
  end
end
