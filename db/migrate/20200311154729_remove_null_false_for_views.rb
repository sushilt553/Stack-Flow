class RemoveNullFalseForViews < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :views, :integer
    add_column :questions, :views, :integer
  end
end
