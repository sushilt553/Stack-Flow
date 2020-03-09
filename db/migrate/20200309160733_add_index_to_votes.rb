class AddIndexToVotes < ActiveRecord::Migration[5.2]
  def change
    add_index :votes, [:votable_type, :votable_id]
    add_index :votes, :voter_id
    add_column :votes, :status, :boolean, null: false
  end
end
