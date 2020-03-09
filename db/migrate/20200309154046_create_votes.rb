class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.string :votable_type, null: false
      t.integer :votable_id, null: false
      t.timestamps
    end

    add_index :votes, [:voter_id, :votable_type, :votable_id], unique: true
  end
end
