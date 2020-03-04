class RemoveColumnFromQuestion < ActiveRecord::Migration[5.2]
  def change
    remove_column(:questions, :tag_id)
  end
end
