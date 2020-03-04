class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :question_id, index: true
      t.integer :tag_id, index: true
      t.timestamps
    end
  end
end
