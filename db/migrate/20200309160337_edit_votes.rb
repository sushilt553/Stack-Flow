class EditVotes < ActiveRecord::Migration[5.2]
  def change
    remove_index :votes, name: "index_votes_on_voter_id_and_votable_type_and_votable_id"
  end
end
