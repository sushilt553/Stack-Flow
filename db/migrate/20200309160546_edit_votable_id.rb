class EditVotableId < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :votable_id
    add_column :votes, :votable_id, :bigint, null: false
  end
end
