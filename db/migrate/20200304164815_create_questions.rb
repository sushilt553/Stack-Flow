class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :tag_id, null: false, index: true
      t.integer :author_id, null: false, index: true
      t.timestamps
    end
  end
end
