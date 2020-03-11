class AddViewsToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :views, :integer, {null: false}
  end
end
