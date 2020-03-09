class EditVotesForPolymorphic < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :votable_id, :bigint
    remove_column :votes, :votable_type, :string
    add_column :votes, :votable_id, :bigint
    add_column :votes, :votable_type, :string
  end
end
