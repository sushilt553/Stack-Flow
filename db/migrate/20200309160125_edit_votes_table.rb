class EditVotesTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :votes, ["voter_id", "votable_type", "votable_id"], name: "index_votes_on_voter_id_and_votable_type_and_votable_id", unique: true
  end
end
