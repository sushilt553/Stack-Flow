class RemoveValidationOnStatus < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :status, :boolean
    add_column :votes, :status, :boolean
  end
end
